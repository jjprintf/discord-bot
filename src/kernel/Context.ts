export class Context<T> {
    protected _options: T;
    
    constructor(options: T) {
        this._options = options;
    }

    public Provider(value: T) {
        if (value !== this._options) throw new Error("Value if not similar of context");

        this._options = value;
    }

    public Get() {
        return this._options;
    }
}