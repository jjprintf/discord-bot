import Discord, { Client as Clientt, IntentsBitField, Partials } from 'discord.js';
import app from './app';

const Client = new app.client.App({
    token: "ODg1MjMzNzYxODI5MTQyNTY5.GD5tJQ.ezZYoA9nLNgzQ5vR8ieUMSkYyOFXdltnOwCSPU",
    options: {
        intents: new IntentsBitField(32767), 
        partials: [
            Partials.Message, 
            Partials.User, 
            Partials.Channel, 
            Partials.GuildMember
        ]
    }
});

export const client: Clientt = Client.client;