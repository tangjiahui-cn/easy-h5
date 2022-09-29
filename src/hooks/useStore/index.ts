import { useEffect, useState } from 'react';
import { Context, IDataStruct, IDispatch, IActionExt } from './type';
import { Store } from 'redux';
export * from './type';

/**
 * 集中管理数据 - store更新影响全局数据更新
 *
 * At 2022.9.21
 *
 * example:
 * （1）useStore(context)
 * （2）
 *    const useData = createUseStore<T>(context)  // 返回一个hooks
 *    const {state, dispatch} = useData()         // 返回state、patch
 *
 */
export default function useStore <S>(context: Context<Store>) : IDataStruct<S> {
  const {store}: Context<Store> = context;
  const [state, setState] = useState<S>(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])

  const dispatch: IDispatch<S> = (action: IActionExt<S>) => {
    store.dispatch(action)
  }

  return {state, dispatch}
}

export function createUseStore <S> (context: Context<Store>) : () => IDataStruct<S> {
  return () => useStore(context) as IDataStruct<S>
}
