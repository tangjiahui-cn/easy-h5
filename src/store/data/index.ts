import { createUseStore, Context } from '@/hooks/useStore';
import { combineReducers, Reducer, createStore, Store } from 'redux';

import * as _state from './state';
import * as _reducers from './reducers';
import { IState } from './type';

export * from './type'
export * from './state'
export * from './reducers'

/**
 * 数据处理
 */

const reducers = <Reducer> combineReducers({
  info: _reducers.infoReducer
})

export const context: Context<Store> = {
  store: createStore(reducers, {
    info: _state.info
  })
}

export const useData = createUseStore<IState>(context)
