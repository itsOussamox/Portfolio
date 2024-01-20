import { useFrame } from '@react-three/fiber';
import Spline, { SPEObject } from '@splinetool/react-spline';
import { useRef, useState } from 'react';

export function Twitter() {
  return (
  <div className='absolute z-50 top-[40%] right-0 left-[65%] bottom-0 w-[20%] h-[20%] cursor-pointer'>
      <Spline scene="https://prod.spline.design/8f4ltC76mtFeJDd6/scene.splinecode" 
      />
  </div>
  );
}


export function Github() {
    return (
        <div className='absolute z-50 top-[15%] right-0 left-[65%] bottom-0 w-[10%] h-[13%]'>
            <Spline scene="https://prod.spline.design/rx5hIfwdw5EDwXVK/scene.splinecode"
            />
        </div>
    );
}

export function React() {
    return (
        <div className='absolute z-50 top-[20%] right-0 left-[85%] bottom-0 w-[10%] h-[13%]'>
            <Spline scene="https://prod.spline.design/1rtqb7b0oLjB-g21/scene.splinecode" />
        </div>
    );
  }
  