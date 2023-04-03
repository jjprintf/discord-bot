import { Kernel } from './Kernel';
import { SlashCommandBuilder, CommandInteraction } from "discord.js";

type _options = {
    data: SlashCommandBuilder,
    run: (client: Kernel, interaction: CommandInteraction) => void;
}

export class Command {
    public _options: _options;
    public _data: SlashCommandBuilder;
    public _run: (client: Kernel, interaction: CommandInteraction) => void;

    constructor(options: _options) {
        this._options = options;
        this._data = options.data;
        this._run = options.run;
    }
}