import { createStore } from 'redux';
import state from './state';
import reducers from './reducers';
import { IStore, IState } from './type';
import { createUseStore, Context } from '@/hooks/useStore';

/**
 * 数据处理
 */
export const context: Context<IStore> = {
  store: createStore(reducers, state)
}

export const useData = createUseStore<IState>(context)
