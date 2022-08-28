import discord from 'discord.js';
import { Events } from '../libs/client';

export default new Events({
  name: 'ready',
  once: true,
  run: async (client: any) => {
    console.log('==> Bot Iniciado');
    let acts = [
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
    ]
    
    let i = Math.floor(Math.random() * acts.length);
    console.log(acts[i])
    console.log(discord.ActivityType.Playing);
    client.user.setActivity(acts[i].name, { type: discord.ActivityType.Playing });
    setInterval(() => {
      let i = Math.floor(Math.random() * acts.length);
      console.log(acts[i])
      client.user.setActivity(acts[i].name, { type: discord.ActivityType.Playing });
    }, 15000)
  }
})
