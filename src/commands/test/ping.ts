import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../../kernel/Command";

export default new Command({
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Comando de testeo pa'),

    run: async (client, int) => {
        await int.reply({ content: 'Pong!'});
    }
})