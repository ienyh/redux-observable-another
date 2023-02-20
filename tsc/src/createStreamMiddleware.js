import { Observable, Subject, observeOn, concatMap, queueScheduler as QueueScheduler, } from 'rxjs';
export function createStreamMiddleware() {
    const actionSubject$ = new Subject();
    const action$ = actionSubject$.asObservable().pipe(observeOn(QueueScheduler));
    let getState;
    let subscription;
    const middleware = (store) => {
        getState = store.getState;
        return (next) => (action) => {
            next(action);
            actionSubject$.next(action);
        };
    };
    middleware.run = (streamer, dispatch) => {
        if (subscription)
            return;
        const middlewareAPI = {
            getState,
            dispatch,
        };
        const store$ = new Observable((subscriber) => {
            subscriber.next(middlewareAPI);
            subscriber.complete();
        });
        const $ = store$.pipe(concatMap((api) => new Observable((subscriber) => {
            action$.subscribe((action) => {
                subscriber.next({
                    store: api,
                    action,
                });
            });
        })));
        subscription = streamer($, middlewareAPI);
    };
    middleware.close = () => {
        if (!subscription || !(subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe))
            return;
        subscription.unsubscribe();
    };
    return middleware;
}
