export * from './editor';
export * from './config';

import {editor, EditorProps} from './editor';
import {config, ConfigProps} from './config';

export interface StateProps {
  editor: EditorProps;
  config: ConfigProps;
}

export const state: StateProps = {
  editor,
  config
}
