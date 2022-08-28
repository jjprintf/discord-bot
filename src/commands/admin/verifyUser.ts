import { SlashCommandBuilder } from 'discord.js';
import discord from 'discord.js';
import { Command } from '../../libs/client';
import { CheckAdminWRP } from '../../libs/funcs';

export default new Command({
  data: new SlashCommandBuilder()
    .setName('verify-user')
    .setDescription('Comando exclusivo para Washington Roleplay')
    .addStringOption(option => 
      option
        .setName('userid')
        .setDescription('User ID')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('name')
        .setDescription('Nickname')
        .setRequired(true)
    ),
  run: async (client: any, int: any) => {
    if(!CheckAdminWRP(int.member, int.options.get('userid').value)) return;
    let user = await int.member.fetch(int.options.get('userid').value);
    if(!user) return int.reply({content: "No se encontro el usuario!", ephemeral: true});
    int.member.setNickname(int.options.get('name').value);
    console.log("Nombre cambiado, agregando roles.");
    int.member.roles.add(['987461162411106329', '995564969162711050', '995564367783407676', '996190398907166790', '995564353006866542', '996189615327293542'], "Verify User");
    await int.reply({content: "Usuario verificado!", ephemeral: true});
  }
})
