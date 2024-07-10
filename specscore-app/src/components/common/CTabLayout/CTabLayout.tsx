'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './style/ctab.layout.module.css';

type Props = {
  tabs: string[];
  readonly label: (tab: string) => string;
  readonly rendering: (tab: string) => React.ReactNode;
  readonly children?: React.ReactNode;
};

const CTabLayout = ({ tabs, label, rendering, children }: Props) => {
  const [current, setCurrent] = useState<string>(tabs[0]);
  const [width, setWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);

  const left = useMemo(
    () => (width / tabs.length) * currentIndex,
    [width, tabs, currentIndex],
  );

  useEffect(() => {
    const onWindowSizeChanged = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', onWindowSizeChanged);

    return () => {
      window.removeEventListener('resize', onWindowSizeChanged);
    };
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row relative'>
        {tabs.map((t, i) => (
          <button
            className={`${styles.tab} flex-1 flex justify-center items-center`}
            onClick={() => {
              setCurrent(t);
              setCurrentIndex(i);
            }}
            key={t}>
            {t == current ? (
              <a className='font-bold text-black'>{label(t)}</a>
            ) : (
              <a className='text-gray'>{label(t)}</a>
            )}
          </button>
        ))}
        <div
          style={{ width: width / tabs.length, left }}
          className={styles.bottomIndicator}
        />
      </div>
      {rendering(current)}
      {children}
    </div>
  );
};

export default CTabLayout;
