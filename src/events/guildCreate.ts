import { Guild } from "discord.js";
import { Events } from "../libs/client";
import mysql from "../libs/sql";
const sql = mysql.connect;
import { RegisterGuild } from '../libs/funcs';

export default new Events({
    name: 'guildCreate',
    once: false,
    run(client, guild: Guild) {
        RegisterGuild(guild.id);
    },
})