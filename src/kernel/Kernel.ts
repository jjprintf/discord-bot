import {Client, Collection, ClientOptions, Routes, SlashCommandBuilder, CommandInteraction} from 'discord.js';
import { Agent } from 'undici';
import { REST } from '@discordjs/rest';
import fs from 'fs';
import { Log, _log } from './Log';

export interface Kernel {
    cmd_collection: Collect;
    agent: Agent;
    _options: _options;
    log: Log;
}

type _options = {
    token: string,
    ID: string,
    client_options: ClientOptions
}

type Collect = Collection<string, object>;

export class Kernel extends Client {
    constructor(options: _options) {
        super(options.client_options);
        this._options = options;
        this.cmd_collection = new Collection();
        this.log = new Log();

        this.agent = new Agent({
            connect: {
                timeout: 3000
            }
        });

        this.rest.setAgent(this.agent);

        this._slash_register();

        this.login(options.token);
    }

    protected async _slash_register() {
        const _commands: JSON[] = [];

        for (const folder of fs.readdirSync(__dirname + `/../commands/`)) {
            for (const file of fs.readdirSync(__dirname + `/../commands/${folder}`).filter((file: string) => file.endsWith('.js'))) {
                const _data = await import(__dirname + `/../commands/${folder}/${file}`).catch((e: unknown) => this.log.logger(`${e}`, _log.ERROR));
                _commands.push(_data.default._data.toJSON());
                this.cmd_collection.set(_data.default._data.name, _data.default);
            }
        }

        const _rest = new REST({ version: '10' })
            .setToken(this._options.token);

        try {
            await _rest.put(
                Routes.applicationCommands(this._options.ID),
                { body: _commands }
            )
            this.log.logger(`Register ${_commands.length} Slash commands`, _log.SUCCESS);
        } catch (e) { this.log.logger(`${e}`, _log.ERROR); }
    }

    protected async _event_register() {
        for (const file of fs.readdirSync(__dirname + `/../events`).filter((file: string) => file.endsWith('.js'))) {
            const _data = await import(__dirname + `/../events/${file}`).catch((e: unknown) => this.log.logger(`${e}`, _log.ERROR));
            if (_data.default.once)
                this.once(_data.default._name, (...args: []) => _data.default._run(this, ...args));
            else
                this.on(_data.default._name, (...args: []) => _data.default._run(this, ...args));
        
        }

        this.log.logger(`Register events`, _log.SUCCESS);
    }
}