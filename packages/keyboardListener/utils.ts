

// 获取当前所有激活按钮
import { activeStatus, activeStatusEnum } from './data';

export function getActiveKeys () : string[] {
  return Object.keys(activeStatus)
    .filter(k => activeStatus[k] === activeStatusEnum.ENABLE)
}

// 判断一个按钮是否激活
export function isKeyActive (key: string) : boolean {
  return activeStatus[key] === activeStatusEnum.ENABLE
}

// 判断一组按钮是否激活
export function isKeysActive (keys: string[]): boolean[] {
  return keys.map(key => isKeyActive(key))
}
