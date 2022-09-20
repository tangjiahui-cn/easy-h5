import React, { useState } from 'react';
import styles from './index.less';

interface IRenderAreaProp {
  w: number;  // 设备实际宽度（相对于屏幕）
  h: number;  // 设备实际高度（相对于屏幕）
  x: number;  // 设备实际x坐标（相对于绘制区域左侧）
  y: number;  // 设备实际y坐标（相对于绘制区域顶部）
  background: string; // 背景色
}
export default function () {

  const [info, setInfo] = useState<IRenderAreaProp>({
    w: 300,
    h: 500,
    x: 300,
    y: 10,
    background: 'white'
  })

  return(
    <div
      className={styles.body}
      style={{
        position: 'absolute',
        left: info.x,
        top: info.y,
        width: info.w,
        height: info.h,
        background: info.background
      }}
      onMouseEnter={() => console.log('鼠标进入')}
    />
  )
}
