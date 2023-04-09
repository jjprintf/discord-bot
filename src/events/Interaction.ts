import Discord from 'discord.js';
import { Event } from '../kernel/Event';
import { Kernel } from '../kernel/Kernel';
import {_log} from "../kernel/Log";

export default new Event({
    name: 'interactionCreate',
    once: false,
    run: async (client: Kernel, int: Discord.CommandInteraction) => {
    if(!int.isChatInputCommand()) return;
        const slashCommand: any = client.cmd_collection.get(int.commandName);

        if(!slashCommand) return;
        try {
            slashCommand._options.run(client, int);
        } catch(e) { client.log.logger(`${e}`, _log.ERROR); }
    }
})
