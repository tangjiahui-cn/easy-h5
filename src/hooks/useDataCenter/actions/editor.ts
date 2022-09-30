import { REDUCE_TYPE, store } from '../index';
import { IEditorAction } from './index';

const getState = () => store.getState().editor

export function setDeviceHeight (deviceHeight: number): IEditorAction {
  const state = getState()
  return {
    type: REDUCE_TYPE.SET_EDITOR,
    payload: {
      ...state,
      deviceHeight,
      height: state.scale * deviceHeight
    }
  }
}

export function setDeviceWidth (deviceWidth: number): IEditorAction {
  const state = getState()
  return {
    type: REDUCE_TYPE.SET_EDITOR,
    payload: {
      ...state,
      deviceWidth,
      width: state.scale * deviceWidth
    }
  }
}

export function setScale (scale: number): IEditorAction {
  const state = getState()
  return {
    type: REDUCE_TYPE.SET_EDITOR,
    payload: {
      ...state,
      scale,
      width: scale * state.deviceWidth,
      height: scale * state.deviceHeight
    }
  }
}
