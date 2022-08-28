import { DiscordAPIError, SlashCommandBuilder } from "discord.js";
import discord from 'discord.js';
import { Command } from "../../libs/client";
import sql from "libs/sql";

export default new Command({
    data: new SlashCommandBuilder()
        .setName('show-guilds')
        .setDMPermission(false)
        .setDescription('Recibe ayuda acerca de Kazutora'),
    run: async (client, int) => {
        return;
    }
})