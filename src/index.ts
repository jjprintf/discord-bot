import Discord, { Client as Clientt, IntentsBitField, Partials } from 'discord.js';
import app from './app';

const Client = new app.client.App({
    token: "TOKEN HERE",
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
