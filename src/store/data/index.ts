import { createStore } from 'redux';
import state from './state';
import reducers from './reducers';
import { IStore, IState } from './type';
import { createUseStore, Context } from '@/hooks/useStore';
export * from './type'
export * from './state'
export * from './reducers'

/**
 * 数据处理
 */
export const context: Context<IStore> = {
  store: createStore(reducers, state)
}

export const useData = createUseStore<IState>(context)
