'use client';

import images from '@assets/images';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
  shape: 'square' | 'rounded';
  onChecked: (b: boolean) => void;
  prev?: boolean;
  readonly children: React.ReactNode;
};

const CCheck = ({ shape, onChecked, prev = false, children }: Props) => {
  const [checked, setChecked] = useState(prev);

  useEffect(() => {
    onChecked(checked);
  }, [onChecked, checked]);

  return (
    <button onClick={() => setChecked((prev) => !prev)}>
      <div className='flex flex-row items-center'>
        {checked && (
          <Image
            src={
              shape == 'rounded'
                ? images.icons.roundCheck
                : images.icons.squareCheck
            }
            width={24}
            height={24}
            alt='체크됨'
          />
        )}
        {!checked && (
          <Image
            src={shape == 'rounded' ? images.icons.round : images.icons.square}
            width={24}
            height={24}
            alt='체크하기'
          />
        )}
        <div className='gap4' />
        {children}
      </div>
    </button>
  );
};

export default CCheck;
