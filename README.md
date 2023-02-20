# redux-observable-another

灵感来自 redux-observable 但是使用过程中感觉很不爽，why actions in actions out, so...

## code

```ts
const streamerMiddleware = createStreamMiddleware()

const store = createStore(reducers, applyMiddleware(streamerMiddleware))

streamerMiddleware.run(
  combineStreamers((observable$, api) =>
    observable$
      .pipe(
        filterAction(FetchTypes.FETCH_START),
        throttleTime(500),
        dispatchAction({ type: FetchTypes.SET_LOADING, payload: true }),
        delay(1000),
        mergeMap(() => from(fetcher().then((response) => response.json()))),
      )
      .subscribe({
        next: (result) => {
          if (result) {
            api.dispatch({ type: FetchTypes.FETCH_DONE, payload: result })
          }
        },
        error: (err) => {
          console.log(err)
          api.dispatch({ type: FetchTypes.FETCH_FAILED, payload: err })
        },
      })
  ),
  store.dispatch
)
```
