import { combineReducers } from 'redux'

export const REDUCE_TYPE = {
  SET_EDITOR: 'SET_EDITOR',
  SET_CONFIG: 'SET_CONFIG'
}

export const reducers = combineReducers({
  editor: createReducer(REDUCE_TYPE.SET_EDITOR),
  config: createReducer(REDUCE_TYPE.SET_CONFIG)
})

function createReducer (type: string) {
  return function (state: any = {}, actions: any) {
    switch (actions.type) {
      case type:
        return actions.payload
    }
    return state
  }
}
