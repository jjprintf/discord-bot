import { EventEmitter } from 'node:events';

export enum _log {
    INFO,
    ERROR,
    SUCCESS
}

type _data = {
    message: string,
    log_type: _log
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

    public logger(message: string, _log_type: _log) {
        this.emit("log", {message: `! [${_log_type}] ${message}`, log_type: _log_type});
    }
}