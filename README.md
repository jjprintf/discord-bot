# Discord-Bot
## [!] Se requiere tener instalado lo siguiente:
- Python 3.10.x
- Node.JS 1.16.x
- NPM

### Usage:
### Nuevo instalador
```
$ git clone https://github.com/PrintfDead/discord-bot.git
$ cd discord-bot
$ ./install
$ npm start
```
### Informacion:
<p>Puedes encontrar el source del instalador en la carpeta "compile/", para iniciar en modo desarrollo usa "npm run dev".<br>
Si eres usuario de windows y encuentras un error en el instalador, ejecuta los comandos manualmente.</p>

### Instalacion anterior instalador:
```
$ git clone https://github.com/PrintfDead/discord-bot.git
$ cd discord-bot
$ python install.py
$ npm start
```
Si no quieren usar el instalador pueden ejecutar estos comandos
```sh
$ npm i typescript tslint eslint nodemon -D
$ npm i discord.js mysql @types/mysql
$ tsc
$ npm start
```
### Comandos de desarrollo:
```sh
$ npm run lint # Iniciar eslint.
$ npm run dev # Iniciar nodemon para typescript.
```
- Se recomienda configurar el archivo .eslintrc para mejorar su linter.

### [!] Recuerde configurar los siguientes archivos
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
    ...
  }
})
```
## :star: <samp>History</samp>
<pre align="center">
<a href="#star--history">
<img alt="" align="center" width="96%" src="https://api.star-history.com/svg?repos=PrintfDead/discord-bot&type=Date"/>
</a>
</pre>
### Recuerda que si tienes un problema o error ir a [Issues](https://github.com/PrintfDead/discord-bot/issues) y abrir un "issue/problema"
### Para soporte extra comunicate conmigo por discord
- User: justPrintf. ⸸#0800
- Discord Server: [OpenSafe](https://discord.gg/ZdMqhEWhUN)

