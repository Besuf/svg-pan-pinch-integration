'use client';
import React from 'react';
import WorldMapSvg from './world.svg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const WorldMap = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <div className='border-2 border-green-500 w-[94vw]'>
          <WorldMapSvg />
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default WorldMap;
