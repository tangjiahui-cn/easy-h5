import React, { useState } from 'react';

export default function () {
  let [mouseHover, setMouseHover] = useState<boolean>(false)

  function startMove () {
    console.log('-> 移动鼠标')
  }

  return <canvas
    style={{background: 'whitesmoke', width: '100%', height: '100%'}}
    onClick={() => {
      mouseHover && startMove()
    }}
    onMouseEnter={() => {
      setMouseHover(true)
    }}
    onMouseLeave={() => {
      setMouseHover(false)
    }}
  />
}
