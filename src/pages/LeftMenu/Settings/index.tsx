import React from 'react';
import { Collapse, Form, InputNumber, Switch } from 'antd';

const { Item } = Form;

export default function () {
  const [form] = Form.useForm();

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '0 16px 16px' }}>
      <Form form={form}>
        <Item
          name={'enableAutoSave'}
          label={'启用自动保存'}
          tooltip={'每隔一段时间保存一次'}
        >
          <Switch />
        </Item>
        <Item
          name={'autoSaveTime'}
          label={'自动保存间隔'}
          tooltip={'每隔多少分钟保存一次'}
        >
          <InputNumber min={0} max={24 * 60} /> min
        </Item>
      </Form>
    </div>
  );
}
