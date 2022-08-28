import Discord from 'discord.js';
import { Events } from '../libs/client';

export default new Events({
    name: 'interactionCreate',
    once: false,
    run: async (client: any, int: Discord.Interaction) => {
    if(!int.isChatInputCommand()) return;
        const slashCommand = client.commandsCollection.get(int.commandName);
        //console.log(slashCommand);
        if(!slashCommand) return;
        try {
            slashCommand.options.run(client, int);
        } catch(e) { console.error(e); }
    }
})
