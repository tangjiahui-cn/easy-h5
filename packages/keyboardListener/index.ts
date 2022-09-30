import { useEffect, useRef } from 'react';
import { useUnmount } from 'ahooks';
import {activeStatus, activeStatusEnum, resetActiveStatus} from './data';
export * from './utils';

/**
 * 全局键盘事件监听器
 *
 * 支持：
 * （1）单次按键监听
 * （2）同时按键监听
 */

export function useKeyBoardListener () {
  const listenKeyDown = useRef(function (e: any) {
    const key = e?.key?.toLowerCase()
    activeStatus[key] = activeStatusEnum.ENABLE

    console.log('【down】:', key)
  })

  const listenKeyUp = useRef(function (e: any) {
    const key = e?.key?.toLowerCase()
    activeStatus[key] = activeStatusEnum.CLOSE

    console.log('【up】:', key)
  })

  function init () {
    window.addEventListener('keydown', listenKeyDown.current)
    window.addEventListener('keyup', listenKeyUp.current)
  }

  function clear () {
    window.removeEventListener('keydown', listenKeyDown.current)
    window.removeEventListener('keyup', listenKeyUp.current)
  }

  useEffect(() => {
    init()
  }, [])

  useUnmount(() => {
    clear()
    resetActiveStatus()
  })
}
