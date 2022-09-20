import React from 'react';
import BackGround from './BackGround';
import RenderArea from './RenderArea';

export default function () {
  return <div style={{ width: '100%', height: '100%', position: 'relative' }}>
    <BackGround />
    <RenderArea />
  </div>;
}
