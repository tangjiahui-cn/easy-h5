export type activeStatusProp = Number

// 按键状态枚举
export enum activeStatusEnum {
  CLOSE = 0,
  ENABLE = 1
}

// 按键激活状态
export const activeStatus: any = {
  ' ': activeStatusEnum.CLOSE,
  'a': activeStatusEnum.CLOSE,
  'b': activeStatusEnum.CLOSE,
}

// 重置所有按键状态
export function resetActiveStatus () {
  Object.keys(activeStatus).forEach(k => {
    activeStatus[k] = activeStatusEnum.CLOSE
  })
}
