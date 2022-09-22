import React, { useState } from 'react';
import { Button, Dropdown, InputNumber, Menu, Space } from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CaretDownOutlined,
  ExpandOutlined,
  PlusOutlined,
  MinusOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useData, INFO_TYPE } from '@/store/data';

export default function () {
  const {state, dispatch} = useData()

  const scaleMenu = (
    <Menu
      items={[50, 75, 100, 125, 150, 200].map((scale) => ({
        key: `${scale}`,
        label: `${scale}%`,
      }))}
      onClick={(k) => {
        dispatch({
          type: INFO_TYPE.SET_SCALE,
          payload: Number(k?.key) / 100
        })
      }}
    />
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
      }}
    >
      <Space style={{ flex: 1 }}>
        <Button>撤销</Button>
        <Button>重置</Button>
        <Button>清空</Button>
        <div>
          <InputNumber style={{ width: 80 }} value={state.info.deviceWidth}
            onChange={(deviceWidth: number) => {
              dispatch({
                type: INFO_TYPE.SET_DEVICE_WIDTH,
                payload: deviceWidth
              });
            }}
          />
          <span style={{ margin: '0 4px' }}>X</span>
          <InputNumber
            style={{ width: 80 }}
            value={state.info.deviceHeight}
            onChange={(deviceHeight: number) => {
              dispatch({
                type: INFO_TYPE.SET_DEVICE_HEIGHT,
                payload: deviceHeight
              });
            }}
          />
          <Dropdown
            overlay={scaleMenu}
            placement={'bottom'}
            trigger={['click']}
          >
            <div
              style={{
                marginLeft: 8,
                textAlign: 'right',
                width: 60,
                cursor: 'pointer',
                display: 'inline-block',
              }}
            >
              {state.info.scale * 100}%<CaretDownOutlined />
            </div>
          </Dropdown>
        </div>
        <Space style={{ paddingLeft: 16 }} size={16}>
          <ArrowLeftOutlined style={{ cursor: 'pointer' }} />
          <ArrowRightOutlined style={{ cursor: 'pointer' }} />
          <ExpandOutlined style={{ cursor: 'pointer' }} />
          <PlusOutlined style={{ cursor: 'pointer' }} />
          <MinusOutlined style={{ cursor: 'pointer' }} />
          <DownloadOutlined style={{ cursor: 'pointer' }} />
          <UploadOutlined style={{ cursor: 'pointer' }} />
        </Space>
      </Space>
      <Space>
        <Button>预览</Button>
        <Button type={'primary'}>保存</Button>
      </Space>
    </div>
  );
}
