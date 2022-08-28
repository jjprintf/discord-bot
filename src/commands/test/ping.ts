import { SlashCommandBuilder } from "discord.js";
import { Command } from "../../libs/client";

export default new Command({
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Comando de testeo pa'),
    run: async (client, int) => {
        return int.reply({ content: 'Pong!'});
    }
})