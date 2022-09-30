export * from './editor';
export * from './config';

import { INIT_EDITOR, EditorProps } from './editor';
import { INIT_CONFIG, ConfigProps } from './config';

export interface StateProps {
  editor: EditorProps;
  config: ConfigProps;
}

export const INIT_STATE: StateProps = {
  editor: INIT_EDITOR,
  config: INIT_CONFIG,
};

export const state: StateProps = {
  ...INIT_STATE,
};
