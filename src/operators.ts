import { Action } from 'redux'
import { Observable } from 'rxjs'
import { StreamerParameter } from './type'

export function filterAction<A extends Action = Action, S = any>(
  type: string | string[] | number | number[]
) {
  const types = Array.isArray(type) ? type : [type]
  return (source: Observable<StreamerParameter<A, S>>) =>
    new Observable<StreamerParameter<A, S> | A>((subscriber) =>
      source.subscribe({
        next: (parameter) => types.includes(parameter.action.type) && subscriber.next(parameter),
        error: subscriber.error,
        complete: subscriber.complete,
      })
    )
}

export function dispatchAction<A extends Action = Action, S = any>(action: A) {
  return (source: Observable<StreamerParameter<A, S>>) =>
    new Observable<StreamerParameter<A, S>>((subscriber) => {
      source.subscribe({
        next: (parameter) => {
          parameter.store.dispatch(action)
          subscriber.next(parameter)
        },
        error: subscriber.error,
        complete: subscriber.complete,
      })
    })
}

export function effect<A extends any = any, F extends Function = Function>(effecter: F) {
  return (source: Observable<A>) =>
    new Observable<A>((subscriber) => {
      source.subscribe({
        next: (parameter) => {
          effecter(parameter)
          subscriber.next(parameter)
        },
        error: subscriber.error,
        complete: subscriber.complete,
      })
    })
}
