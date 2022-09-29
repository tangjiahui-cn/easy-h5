import { AnyAction } from 'redux';

export interface Context<S> {
  store: S;
}

export type IDispatch <S> = (action: IActionExt<S>) => void;

export interface IAction <S> extends AnyAction {
  payload: S;
}

export interface IActionAnd <S, T> extends IAction<S> {
  payload: S & T[keyof T]
}

export interface IActionExt <S> extends AnyAction {
  payload: S | number | string;
}

export interface IDataStruct <S> {
  state: S;
  dispatch: IDispatch<S>
}
