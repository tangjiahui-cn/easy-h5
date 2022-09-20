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

export default function () {
  const [size, setSize] = useState<{ w: number; h: number }>({
    w: 300,
    h: 800,
  });
  const [scale, setScale] = useState<number>(100); // 当前比例

  const scaleMenu = (
    <Menu
      items={[50, 75, 100, 125, 150, 200].map((scale) => ({
        key: `${scale}`,
        label: `${scale}%`,
      }))}
      onClick={(k) => setScale(Number(k?.key))}
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
          <InputNumber style={{ width: 80 }} value={size.w} />
          <span style={{ margin: '0 4px' }}>X</span>
          <InputNumber style={{ width: 80 }} value={size.h} />
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
              {scale}%<CaretDownOutlined />
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
