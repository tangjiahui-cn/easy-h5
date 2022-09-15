import React from 'react';
import { Tabs } from 'antd';
import {
  CopyOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import File from './File';
import Components from './Components';
import Settings from './Settings';

export default function () {
  return (
    <div
      style={{
        width: 360,
        height: '100%',
        display: 'flex',
        paddingTop: 10,
        overflowY: 'hidden',
      }}
      className={styles.antTabs}
    >
      <Tabs
        defaultActiveKey={'1'}
        tabPosition={'left'}
        size={'small'}
        style={{ width: '100%', height: '100%', overflowY: 'hidden' }}
        items={[
          {
            key: '1',
            label: <CopyOutlined style={{ fontSize: 20 }} />,
            children: <File />,
          },
          {
            key: '2',
            label: <AppstoreOutlined style={{ fontSize: 20 }} />,
            children: <Components />,
          },
          {
            key: '3',
            label: <SettingOutlined style={{ fontSize: 20 }} />,
            children: <Settings />,
          },
        ]}
        tabBarStyle={{ width: 64 }}
        tabBarGutter={16}
      />
    </div>
  );
}
