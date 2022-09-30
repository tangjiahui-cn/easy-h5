export interface EditorProps {
  deviceWidth: number;
  deviceHeight: number;
  width: number;
  height: number;
  scale: number;
}

const SCALE = 0.75;
export const INIT_EDITOR: EditorProps = {
  deviceWidth: 390,
  deviceHeight: 844,
  width: 390 * SCALE,
  height: 844 * SCALE,
  scale: SCALE,
};
