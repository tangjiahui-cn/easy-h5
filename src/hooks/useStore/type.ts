import { Action, Store } from 'redux';
export { Action, Store }

export interface Context<S> {
  store: S;
}

export type IDispatch <S> = (action: IAction<S>) => void;

export interface IAction <S> extends Action {
  payload: S
}

export interface IDataStruct <S> {
  state: S;
  dispatch: IDispatch<S>
}
