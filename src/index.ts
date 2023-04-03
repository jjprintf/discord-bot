import Discord, { Client as Client, IntentsBitField, Partials } from 'discord.js';
import { Kernel } from '../kernel/Kernel';

export const client = new Kernel({
    token: "TOKEN HERE",
    ID: "ID OF BOT",
    client_options: {
        intents: new IntentsBitField(32767), 
        partials: [
            Partials.Message, 
            Partials.User, 
            Partials.Channel, 
            Partials.GuildMember
        ]
    }
});

