import { EventEmitter } from 'node:events';

export enum _log {
    INFO,
    ERROR,
    SUCCESS
}

type _data = {
    message: string
}

export interface EmitterEvents {
    log: [_data: _data];
}

export interface Log {
    emit<K extends keyof EmitterEvents>(event: K, ...args: EmitterEvents[K]): boolean;
    on<K extends keyof EmitterEvents>(event: K, listener: (...args: EmitterEvents[K]) => void): this;
}

export class Log extends EventEmitter {
    constructor() {
        super();
    }

    public logger(message: string, log_type: _log) {
        this.emit("log", {message: `! [${log_type}] ${message}`});
    }
}