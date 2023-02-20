import { Subscription } from 'rxjs';
export function combineStreamers(...streamers) {
    const combinedStreamer = (observable$, api) => {
        const subscription = new Subscription();
        for (let i = 0; i < streamers.length; i++) {
            subscription.add(streamers[i](observable$, api));
        }
        return subscription;
    };
    try {
        Object.defineProperty(combineStreamers, 'name', {
            value: `combineStreamers(${streamers.map((s) => s.name || '<anonymous>').join(', ')})`,
        });
    }
    catch (_a) { }
    return combinedStreamer;
}
