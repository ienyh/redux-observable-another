import { Action, Dispatch, MiddlewareAPI } from 'redux'
import { Observable, Subscription } from 'rxjs'
import { Streamer, StreamerParameter } from './type'

export function combineStreamers<A extends Action = Action, S = any>(...streamers: Streamer[]) {
  const combinedStreamer = (
    observable$: Observable<StreamerParameter<A, S>>,
    api: MiddlewareAPI<Dispatch<A>, S>
  ) => {
    const subscription = new Subscription()
    for (let i = 0; i < streamers.length; i++) {
      subscription.add(streamers[i](observable$, api))
    }
    return subscription
  }
  try {
    Object.defineProperty(combineStreamers, 'name', {
      value: `combineStreamers(${streamers.map((s) => s.name || '<anonymous>').join(', ')})`,
    })
  } catch { }
  return combinedStreamer
}
