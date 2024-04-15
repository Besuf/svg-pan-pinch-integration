'use client';
import React from 'react';
import Dude from './dude.svg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const MobileDemo = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <div className='border-2 border-green-500 w-[94vw]'>
          <Dude />
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default MobileDemo;
