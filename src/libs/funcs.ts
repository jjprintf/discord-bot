import Log from './log';
import MySQL from './sql';
import { Guild } from 'discord.js';
const sql = MySQL.connect;

export function getAllGuilds() {
    let data;
    sql.query('SELECT * FROM Guild', [], (err, rows) => {
        if (err) console.log(err);
        data = rows;
    })
    return data;
}

export function CheckGuild(guildID: string, IfNotExistsRegister: boolean = false) {
    let result: any;
    sql.query('SELECT ID FROM Guild WHERE ID = ?',
    [guildID],
    (err, rows) => {
        if (err) console.error(err);
        if (!rows) return false;
        if (rows) return true;
        if(!result) {
            if (IfNotExistsRegister) RegisterGuild(guildID);
        }
    });
    return result;
}

export function CheckAntiraid(guildID: string) {
    let result;
    sql.query('SELECT antiraid FROM Guild WHERE ID = ?', 
    [guildID],
    (err, rows) => {
        if (err) console.error(err);
        if (!rows) RegisterGuild(guildID);
        if (rows[0] === 0) result = true;
        else result = false;
    });
    return result;
}

export function RegisterGuild(guildID: string) {
    if(CheckGuild(guildID)) return;
    sql.query('INSERT INTO Guild (ID) VALUES (?)', [guildID], (err, rows) => {
        if (err) console.error(err);
        if (rows) console.log('Se registro el server correctamente');
    });
    return true;
}

export function CheckDev(userID: string) { 
    let result;
    let devs = ['844441354590355466'];
    devs.forEach(x => {
        if (x === userID) result = true;
        else result = false;
    });
    return result;
}

export async function CheckAdminWRP(member: any, userID: string) {
  let user = await member.fetch(userID);
  if (!user) return false;
  let result = user.roles.cache.get('995529135675949066');
  if(result) {
    return true;
  } else {
    return false;
  }
}
