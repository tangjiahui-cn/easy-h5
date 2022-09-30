import { EditorProps, INIT_EDITOR, REDUCE_TYPE, store } from '../index';
import { IEditorAction } from './index';

const getState = () => store.getState().editor;
const action = (payload: EditorProps): IEditorAction => ({
  type: REDUCE_TYPE.SET_EDITOR,
  payload,
});

export function reset(): IEditorAction {
  const state = getState();
  return action({
    ...state,
    ...INIT_EDITOR,
  });
}

export function addDeviceHeight(add: number): IEditorAction {
  const state = getState();
  const deviceHeight = state.deviceHeight + add;
  return action({
    ...state,
    deviceHeight,
    height: state.scale * deviceHeight,
  });
}

export function subDeviceHeight(sub: number): IEditorAction {
  const state = getState();
  const deviceHeight = state.deviceHeight - sub;
  return action({
    ...state,
    deviceHeight,
    height: state.scale * deviceHeight,
  });
}

export function setDeviceHeight(deviceHeight: number): IEditorAction {
  const state = getState();
  return action({
    ...state,
    deviceHeight,
    height: state.scale * deviceHeight,
  });
}

export function setDeviceWidth(deviceWidth: number): IEditorAction {
  const state = getState();
  return action({
    ...state,
    deviceWidth,
    width: state.scale * deviceWidth,
  });
}

export function addDeviceWidth(add: number): IEditorAction {
  const state = getState();
  const deviceWidth = state.deviceWidth + add;
  return action({
    ...state,
    deviceWidth,
    width: state.scale * deviceWidth,
  });
}

export function subDeviceWidth(sub: number): IEditorAction {
  const state = getState();
  const deviceWidth = state.deviceWidth - sub;
  return action({
    ...state,
    deviceWidth,
    width: state.scale * deviceWidth,
  });
}

export function setScale(scale: number): IEditorAction {
  const state = getState();
  return action({
    ...state,
    scale,
    width: scale * state.deviceWidth,
    height: scale * state.deviceHeight,
  });
}
