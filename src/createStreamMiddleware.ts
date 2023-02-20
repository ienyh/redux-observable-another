import { Action, Dispatch, MiddlewareAPI } from 'redux'
import {
  Observable,
  Subject,
  observeOn,
  concatMap,
  queueScheduler as QueueScheduler,
  Subscription,
} from 'rxjs'
import { StreamMiddleware, StreamerParameter } from './type'

export function createStreamMiddleware<A extends Action = Action, S = any>(): StreamMiddleware<
  A,
  S
> {
  const actionSubject$ = new Subject<A>()
  const action$ = actionSubject$.asObservable().pipe(observeOn(QueueScheduler))
  let getState: () => S
  let subscription: Subscription
  const middleware: StreamMiddleware<A, S> = (store) => {
    getState = store.getState
    return (next) => (action: A) => {
      next(action)
      actionSubject$.next(action)
    }
  }
  middleware.run = (streamer, dispatch) => {
    if (subscription) return
    const middlewareAPI = {
      getState,
      dispatch,
    }
    const store$ = new Observable<MiddlewareAPI<Dispatch<A>, S>>((subscriber) => {
      subscriber.next(middlewareAPI)
      subscriber.complete()
    })
    const $ = store$.pipe(
      concatMap(
        (api) =>
          new Observable<StreamerParameter<A, S>>((subscriber) => {
            action$.subscribe((action) => {
              subscriber.next({
                store: api,
                action,
              })
            })
          })
      )
    )
    subscription = streamer($, middlewareAPI)
  }
  middleware.close = () => {
    if (!subscription || !subscription?.unsubscribe) return
    subscription.unsubscribe()
  }
  return middleware
}
