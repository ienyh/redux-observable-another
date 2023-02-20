import { Action, Middleware, Dispatch, MiddlewareAPI } from 'redux'
import { Observable, Subscription } from 'rxjs'

export interface StreamerParameter<A extends Action, S> {
  action: Readonly<A>
  store: MiddlewareAPI<Dispatch<A>, S>
}

export interface Streamer<A extends Action = Action, S = any> {
  (
    observable$: Observable<StreamerParameter<A, S>>,
    api?: MiddlewareAPI<Dispatch<A>, S>
  ): Subscription
}

export interface StreamMiddleware<A extends Action, S extends any>
  extends Middleware<{}, S, Dispatch<Action>> {
  run(rootStreamer: Streamer<A, S>, dispatch: Dispatch): void
  close(): void
}
