import { Observable } from 'rxjs';
export function filterAction(type) {
    const types = Array.isArray(type) ? type : [type];
    return (source) => new Observable((subscriber) => source.subscribe({
        next: (parameter) => types.includes(parameter.action.type) && subscriber.next(parameter),
        error: subscriber.error,
        complete: subscriber.complete,
    }));
}
export function dispatchAction(action) {
    return (source) => new Observable((subscriber) => {
        source.subscribe({
            next: (parameter) => {
                parameter.store.dispatch(action);
                subscriber.next(parameter);
            },
            error: subscriber.error,
            complete: subscriber.complete,
        });
    });
}
export function effect(effecter) {
    return (source) => new Observable((subscriber) => {
        source.subscribe({
            next: (parameter) => {
                effecter(parameter);
                subscriber.next(parameter);
            },
            error: subscriber.error,
            complete: subscriber.complete,
        });
    });
}
