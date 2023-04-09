import { Kernel } from './Kernel';

type _options = {
    name: string,
    run: (client: Kernel, ...args: any[]) => void;
    once?: boolean | false;
};

export class Event {
    public _name: string;
    public _run: (client: Kernel, ...args: any[]) => void;
    public _once?: boolean | false;
    public _options: _options;

    constructor(options: _options) {
        this._options = options;
        this._name = options.name;
        this._run = options.run;
        this._once = options.once;
    }
}