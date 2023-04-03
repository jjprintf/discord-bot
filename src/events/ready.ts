import discord from 'discord.js';
import { Event } from '../../kernel/Event';
import { Kernel } from '../../kernel/Kernel';

export default new Event({
  name: 'ready',
  once: true,
  run: async (client: Kernel) => {
    console.log('==> Bot Iniciado');
    const acts = [
      {
        name: 'UWU',
        url: '',
        type: 'Playing'
      },
      {
        name: 'Version Beta 1.0z',
        url: '',
        type: 'Watching'
      }
    ];
    
    const i = Math.floor(Math.random() * acts.length);

    client.user?.setActivity(acts[i].name, { type: discord.ActivityType.Playing });
    setInterval(() => {
      const i2 = Math.floor(Math.random() * acts.length);

      client.user?.setActivity(acts[i2].name, { type: discord.ActivityType.Playing });
    }, 15000);

  }
});
