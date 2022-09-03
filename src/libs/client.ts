import {IntentsBitField, Client, ClientOptions, Routes, SlashCommandBuilder, CommandInteraction, Collection} from 'discord.js';
import { REST } from '@discordjs/rest';
import { Agent } from 'undici';
import fs from 'fs';

type arguments = {
    token: string,
    options: ClientOptions,
}

type Collect = Collection<string, object>;

export class App {
    public args: arguments;
    public client: Client;
    public agent: Agent;
    constructor(args: arguments) {
        this.args = args;

        this.client = new Client(this.args.options);
        this.agent = new Agent({
            connect: {
                timeout: 3000
            }
        });
        this.client.rest.setAgent(this.agent);
        const client = this.client;
        client.commandsCollection = new Collection();
        this.client.commandsCollection = new Collection();
        this.Run();
        this.Load();
    }

    private async Run() {
        await this.client.login(this.args.token);
    }

    public Log(message: string) {
        console.info(`[!] ${message}`);
    }

    private async Load() {
        await this.SlashRegister();
        await this.SlashLoad();
        await this.Event();
    }

    private async SlashRegister() {
        const commands: any[] = [];
        const commandsFolder = fs.readdirSync(__dirname + '/../commands');
        for (let folder of commandsFolder) {
            const commandsFile = fs.readdirSync(__dirname + `/../commands/${folder}`).filter(file => file.endsWith('.js'));
            for (let file of commandsFile) {
                const command = await import(__dirname + `/../commands/${folder}/${file}`).then((data) => {
                    commands.push(data.default.data.toJSON());
                    this.Log(`Slash Command Register -> ${data.default.data.name}`);
                }).catch((e:any) => console.error(e));
                //console.log(commands);
            }
        }


        const rest = new REST({ version: '10' }).setToken(this.args.token);

        try {
            await rest.put(
                Routes.applicationCommands("885233761829142569"),
                { body: commands },
            );
        } catch (e) { console.error(e); }
    }

    private async SlashLoad() {
        const commandsFolder = fs.readdirSync(__dirname + '/../commands');
        for (let folder of commandsFolder) {
            const commandsFile = fs.readdirSync(__dirname + `/../commands/${folder}`).filter(file => file.endsWith('.js'));
            for (let file of commandsFile) {
                const command = await import(__dirname + `/../commands/${folder}/${file}`).then((data) => {
                    this.client.commandsCollection.set(data.default.data.name, data.default);
                    this.Log(`Slash Command Added ==> ${data.default.data.name}`);
                }).catch((e:any) => console.error(e));
                
            }
        }
    }

    private async Event() {
        const eventsFiles = fs.readdirSync(__dirname + '/../events').filter(file => file.endsWith('.js'));
        for (let file of eventsFiles) {
            const events = await import(__dirname + `/../events/${file}`).then((data) => {
                if(data.default.once) this.client.once(data.default.name, (...args: any) => data.default.run(this.client, ...args));
                else this.client.on(data.default.name, (...args: any) => data.default.run(this.client, ...args));
                this.Log(`Event Added -> ${data.default.name}`);
            }).catch((e:any) => console.error(e));
        }
    }
}

type optionsCommands = {
    data: SlashCommandBuilder,
    run: (client: Client, int: CommandInteraction) => any;
}

type optionsEvents = {
    name: string;
    once: boolean;
    run: (client: Client, ...args: any) => any;
}

export class Command {
    public options: optionsCommands;
    public data: SlashCommandBuilder;
    public run: (client: Client, int: CommandInteraction) => any;

    constructor(options: optionsCommands) {
        this.options = options;
        this.data = options.data;
        this.run = options.run;
    }
}

export class Events {
    public options: optionsEvents;
    public name: string;
    public run: (client: Client, ...args: any) => any;
    public once: boolean;
    constructor(options: optionsEvents) {
        this.options = options;
        this.name = options.name;
        this.run = options.run;
        this.once = options.once;
    }
}
