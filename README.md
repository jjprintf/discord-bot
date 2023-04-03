# **Discord-Bot**
## [!] The toools is required to be installed:
- Node.JS 1.19.x
- NPM

### Usage:
### Installation
```
$ git clone https://github.com/PrintfDead/discord-bot.git
$ cd discord-bot
$ npm install
$ tsc
$ npm start
```

### development commands:
```sh
$ npm run lint # Start eslint.
$ npm run dev # Start nodemon for typescript.
```
- It is recommended to configure the .eslintrc file to improve your linter.

### [!] Recuerde configurar los siguientes archivos
- src/index.ts ==> You have to put the token to be able to connect the bot and its ID.

# How to create commands
- To create a command you must go to the src/commands folder (If you want to create a new category of commands create a new folder with any name) choose a folder that exists or yours and create a ts file (filename.ts)
## Code of Command:
```ts
import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../../../kernel/Command';

export default new Command({
  data: new SlashCommandBuilder()
    .setName(...)
    ...
  ,
  run: async (client, interaction) => {
    ...
  }
})
```

# How to create events
- To create an event you have to go to the src/events folder and create a ts file (filename.ts)
## Code of Events:
```ts
import Discord from 'discord.js';
import { Kernel } from '../../kernel/Kernel';
import { Event } from '../../kernel/Event';

export default new Event({
  name: 'eventName',
  once: boolean, // false = El evento se llama mas de una vez - true = El evento se llama una sola vez
  run: async (client: Kernel, ...) => {
    ...
  }
})
```
# It also has a built-in log system through events
- The kernel emits an event called 'log' where you will receive ERRORS, SUCCESS, INFO messages.
## Usage
- This example needs the client started, I will take the index.ts file as an example
```ts
import Discord, { Client as Client, IntentsBitField, Partials } from 'discord.js';
import { Kernel } from '../kernel/Kernel';

export const client = new Kernel({
    token: "TOKEN HERE",
    ID: "ID OF BOT",
    client_options: {
        intents: [], // Put your intents here
        partials: [] // Put your partials here
    }
});

client.log.on('log', (message: string, _log_type) => {
  if (_log_type.ERROR) return console.error(message);
  console.log(message);
  /**
   * @message {string} Returns a message with the format "! [LOG_TYPE] {message}"
   * @log_type {string}returns a type of the _log enumerator ERROR, SUCCESS or INFO
   */
});
// more info in kernel/Log.ts
```

## :star: <samp>History</samp>
<pre align="center">
<a href="#star--history">
<img alt="" align="center" width="96%" src="https://api.star-history.com/svg?repos=PrintfDead/discord-bot&type=Date"/>
</a>
</pre>
### Remember that if you have a problem or error go to [Issues](https://github.com/PrintfDead/discord-bot/issues) and open an "issue"
### For extra support contact me on discord
- User: justPrintf.#9145
- Discord Server: [OpenSafe](https://discord.gg/ZdMqhEWhUN)

