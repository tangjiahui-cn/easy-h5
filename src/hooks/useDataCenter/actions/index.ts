import { AnyAction } from 'redux';
import { EditorProps } from '@/hooks/useDataCenter';

export interface IAction <S> extends AnyAction {
  payload: S;
}
export type IEditorAction = IAction<EditorProps>

import * as editor from './editor';
import * as config from './config';

export const actions = {
  editor,
  config
}
