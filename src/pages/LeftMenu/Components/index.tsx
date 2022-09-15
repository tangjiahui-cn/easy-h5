import React from 'react';
import { Collapse } from 'antd';
import styles from './index.less';

const { Panel } = Collapse;

export default function () {
  return (
    <div
      style={{ height: '100%', overflowY: 'auto' }}
      className={styles.antdCollapse}
    >
      <Collapse defaultActiveKey={1}>
        <Panel header={'基础组件'} key={'1'}>
          11
        </Panel>
        <Panel header={'图表组件'} key={'2'}>
          年后
        </Panel>
        <Panel header={'自定义组件'} key={'3'}>
          年后
        </Panel>
      </Collapse>
    </div>
  );
}
