import { InfoProp, IState, ReducerState } from '../type';
import { INIT_INFO } from '../state';
import { IActionAnd } from '@/hooks/useStore';

export const INFO_TYPE = {
  SET: 'SetInfo',
  SET_SCALE: '2',
  SET_DEVICE_WIDTH: '3',
  SET_DEVICE_HEIGHT: '4',
}

export function infoReducer (state: InfoProp = INIT_INFO, action: IActionAnd<IState, InfoProp>): ReducerState {
  switch (action.type) {
    case INFO_TYPE.SET:
      return action?.payload.info;
    case INFO_TYPE.SET_SCALE:
      return {
        ...state,
        scale: action.payload as number,
        width: action.payload * state.deviceWidth,
        height: action.payload * state.deviceHeight
      }
    case INFO_TYPE.SET_DEVICE_WIDTH:
      return {
        ...state,
        deviceWidth: action.payload as number,
        width: action.payload * state.scale,
      }
    case INFO_TYPE.SET_DEVICE_HEIGHT:
      return {
        ...state,
        deviceHeight: action.payload as number,
        height: action.payload * state.scale
      }
    default:
      return state;
  }
}
