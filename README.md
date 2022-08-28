# Discord-Bot
## [!] Se requiere tener instalado lo siguiente:
- Python 3.10.x
- Node.JS 1.16.x
- NPM

### Usage:
```
$ git clone https://github.com/PrintfDead/discord-bot.git
$ cd discord-bot
$ python install.py
$ tsc
$ node out/index.js
```
### [!] Recuerde configurar los siguientes archivos
- src/libs/sql.ts ==> Tiene que poner los datos para hacer la conexion a la base de datos
- src/index.ts ==> Tiene que poner el token para poder conectar el bot.

# Como crear comandos
- Para crear un comando debes ir a la carpeta src/commands (Si deseas crear una nueva categoria de comandos crea una carpeta nueva con cualquier nombre) eligen una carpeta de las que hay o de las suyas y crean un archivo ts (filename.ts)
## Codigo:
```ts
import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../../libs/client.ts';

export default new Command({
  data: new SlashCommandBuilder()
    .setName(...)
    ...
  ,
  run: async (client, int) => {
    ...
  }
})
```

# Como crear eventos
- Para crear un evento tienes que ir a la carpeta src/events y crear un archivo ts (filename.ts)
## Codigo:
```ts
import Discord from 'discord.js';
import { Events } from '../libs/client';

export default new Events({
  name: 'eventName',
  once: boolean, // false = El evento se llama mas de una vez - true = El evento se llama una sola vez
  run: async (client, ...) => {
    if(!int.isChatInputCommand()) return;
    const slashCommand = client.commandsCollection.get(int.commandName);
    //console.log(slashCommand);
    if(!slashCommand) return;
    try {
        slashCommand.options.run(client, int);
    } catch(e) { console.error(e); }
  }
})
```

### Recuerda que si tienes un problema o error ir a ![https://github.com/PrintfDead/discord-bot/issues](Issues) y abrir un "issue/problema"
