'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles/cplan.module.css';

export type Plans = 'Basic' | 'Premium' | 'Black' | 'General';

type Props = {
  plan: Plans;
};

const CPlan = ({ plan }: Props) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

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
    <div className='relative'>
      <Link href={'/plan'}>
        <div
          className={`pl-2 pr-2 flex justify-center items-center bg-plan-${plan.toLowerCase()} rounded-4 text-sm text-white`}>
          {plan}
        </div>
      </Link>
      {isTooltipVisible && (
        <div className={styles.tooltip}>
          <a className='text-xs font-400'>
            {'등급을 '} <strong className='font-bold'>{'업그레이드'}</strong>
            {' 할 수 있어요!'}
          </a>
          <div className={styles.triangle} />
        </div>
      )}
    </div>
  );
};

export default CPlan;
