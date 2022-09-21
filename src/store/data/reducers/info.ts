import { IAction, ReducerState } from '../type';

export default function info (state: any = {}, action: IAction): ReducerState {
  switch (action.type) {
    case 'SetInfo':
      return action?.payload.info;
    default:
      return state;
  }
}
