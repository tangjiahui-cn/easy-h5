import { createStore } from 'redux';
import useStateWithRef from '@/hooks/useStateWithRef';
import { useEffect } from 'react';
import { state, StateProps } from './state';
import { reducers } from './reducers';

export * from './state';
export * from './reducers';
export * from './actions';
import { actions } from './actions';

/**
 * 全局状态管理
 *
 * 使用：
 *   import {useDataCenter, actions, REDUCE_TYPE} from '@/hooks/useDataCenter';
 *
 *   const {state, stateRef, dispatch} = useDataCenter()
 *   useEffect(() => { ... }, [state])  // 监听数据变化
 *   dispatch({type: REDUCE_TYPE.SET_EDITOR, payload: {...}})   // 两种更新数据方式
 *   dispatch(actions.setDeviceHeight(100))
 */
export const store = createStore(reducers, state);
export function useDataCenter() {
  const [state, setState, stateRef] = useStateWithRef<StateProps>(
    store.getState(),
  );

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  function dispatch(action: any) {
    store.dispatch(action);
  }

  return {
    state,
    stateRef,
    dispatch,
    actions,
  };
}
