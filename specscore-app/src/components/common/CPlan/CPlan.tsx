'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles/cplan.module.css';
import Image from 'next/image';
import images from '@assets/images';

export type Plans = 'Basic' | 'Premium' | 'Black' | 'General';

type Props = {
  plan: Plans;
  tooltipVisible?: boolean;
  isRecommanded?: boolean;
};

const CPlan = ({
  plan,
  tooltipVisible = true,
  isRecommanded = false,
}: Props) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(tooltipVisible);

  useEffect(() => {
    const hideTooltip = () => {
      setIsTooltipVisible(false);
    };

    window.addEventListener('click', hideTooltip);
    window.addEventListener('scroll', hideTooltip);

    return () => {
      window.removeEventListener('click', hideTooltip);
      window.removeEventListener('scroll', hideTooltip);
    };
  }, []);

  return (
    <div className='relative flex flex-row items-center'>
      <Link href={'/plan'}>
        <div
          className={`pl-2 pr-2 flex justify-center items-center bg-plan-${plan.toLowerCase()} rounded-4 text-sm text-white`}>
          {plan}
        </div>
      </Link>
      {isRecommanded && (
        <div className='flex flex-row items-center ml-3'>
          <Image src={images.logo.x1} width={24} height={24} alt='추천 상품' />
          <div className='gap4' />
          <span className='font-bold text-sm text-red'>{'추천'}</span>
        </div>
      )}
      {isTooltipVisible && (
        <div className={styles.tooltip}>
          <span className='text-xs font-400'>
            {'등급을 '} <strong className='font-bold'>{'업그레이드'}</strong>
            {' 할 수 있어요!'}
          </span>
          <div className={styles.triangle} />
        </div>
      )}
    </div>
  );
};

export default CPlan;
