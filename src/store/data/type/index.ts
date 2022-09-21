import { Action, Store } from 'redux';
import Info from './info';

export type IStore = Store
export interface IState {
  info: Info
}

export type ReducerState = Info;
export interface IAction extends Action {
  payload: IState
}

export {
  Info
}
