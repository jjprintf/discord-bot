export function CreateState<T>(_default: T) {
    let _value = _default;
    const _setter = (newValue: T) => { return _value = newValue; }

    return [
        _value,
        _setter
    ]
}