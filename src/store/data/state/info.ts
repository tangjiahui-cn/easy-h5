import {InfoProp} from '../type'
/**
 * UI信息
 */

const SCALE = 0.75

export const INIT_INFO: InfoProp = {
  deviceWidth: 390,
  deviceHeight: 844,
  width: 390 * SCALE,
  height: 844 * SCALE,
  scale: SCALE,
}

export const info: InfoProp = {...INIT_INFO}
