'use client';

import { useEffect, useState } from 'react';
import styles from './styles/ctoggle.module.css';

type Props = {
  origin?: boolean;
  onChanged: (b: boolean) => void;
};

const CToggle = ({ origin = false, onChanged }: Props) => {
  const [isActive, setIsActive] = useState(origin);

  useEffect(() => {
    onChanged(isActive);
  }, [onChanged, isActive]);

  return (
    <button onClick={() => setIsActive((b) => !b)}>
      <div
        className={
          isActive ? `${styles.wrapper} bg-red` : `${styles.wrapper} bg-gray`
        }>
        <div
          className={`${styles.circle} shadow absolute ${
            isActive ? 'left-6' : 'left-0.5'
          }`}
        />
      </div>
    </button>
  );
};

export default CToggle;
