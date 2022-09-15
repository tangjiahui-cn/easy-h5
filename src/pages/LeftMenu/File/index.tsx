import React, { useState } from 'react';
import { Space } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import styles from './index.less';

export default function () {
  const [current, setCurrent] = useState<string>('1');
  const [fileList, setFileList] = useState<any[]>([
    { id: '1', filename: '页面1', json: 'aas-xx' },
    { id: '2', filename: '页面2', json: 'aas-xx' },
    { id: '3', filename: '页面2', json: 'aas-xx' },
  ]);

  const OperatorBar = (
    <div
      style={{
        borderBottom: '1px solid #e5e5e5',
        padding: '0px 16px 8px',
        lineHeight: '32px',
      }}
    >
      文件区
      <Space
        style={{
          float: 'right',
          fontSize: 18,
          color: 'grey',
          lineHeight: '32px',
        }}
      >
        <div style={{ cursor: 'pointer' }}>
          <FileAddOutlined />
        </div>
      </Space>
    </div>
  );

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {OperatorBar}

      <div style={{ overflowY: 'auto', flex: 1, paddingTop: 8 }}>
        {fileList?.map((file) => {
          return (
            <div
              key={file.id}
              className={`${styles.fileItem} ${
                file?.id === current ? styles.fileItemChoose : ''
              }`}
              onClick={() => setCurrent(file?.id)}
            >
              {file.filename}
            </div>
          );
        })}
      </div>
    </div>
  );
}
