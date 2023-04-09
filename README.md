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
import { Command } from 'path/to/kernel/Command';

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
import { Kernel } from 'path/to/kernel/Kernel';
import { Event } from 'path/to/kernel/Event';

export default new Event({
  name: 'eventName',
  once: boolean,
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
import { Kernel } from 'path/to/kernel/Kernel';

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

# How to use States
- State, used to create state variables, can simplify the movement of data and variables in your code.
# Example:
```ts
import { CreateState } from 'path/to/kernel/State';

const [name, setName] = CreateState<string>("");

// name is readonly
// setName is setter.
setName("Printf.");
// Expected output: name = Printf.
```

# How to use Contexts
- Context, serves to create a context that you can use globally than your code.
# Example
```ts
import { Context } from 'path/to/kernel/Context';
import { CreateState } from 'path/to/kernel/State';

const UserContext = new Context<object>({
  name: string,
  setUserName: () => {}
});

const [name, setName] = CreateState<string>("");

UserContext.Provider({ name, setName }); // set value of name and setUserName

const [name, setName] = UserContext.Get(); // get value of name and setUserName
```

### Information:
- CreateState setters are incomplete and it's a BETA feature, same for Context.
- Context and CreateState accept all types of values, more functions will be added soon.

<br><br>

### Remember that if you have a problem or error go to [Issues](https://github.com/PrintfDead/discord-bot/issues) and open an "issue"
### For extra support contact me on discord
- User: justPrintf.#9145
- Discord Server: [OpenSafe](https://discord.gg/ZdMqhEWhUN)

