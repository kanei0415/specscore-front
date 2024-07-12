import React, { useEffect, useState } from 'react';
import styles from './styles/cbottom.sheet.module.css';
import Image from 'next/image';
import images from '@assets/images';
import Backdrop from '../Backdrop/Backdrop';

type Props = {
  title: string;
  prev: string;
  list: string[];
  onItemSelected: (item: string) => void;
  readonly renderItem: (item: string) => React.ReactNode;
};

const CBottomSheet = ({
  title,
  prev,
  list,
  onItemSelected,
  renderItem,
}: Props) => {
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [selected, setSelected] = useState(prev);

  useEffect(() => {
    onItemSelected(selected);
  }, [onItemSelected, selected]);

  return (
    <>
      <button
        onClick={() => setIsSheetVisible(true)}
        className='flex flex-row items-center'>
        <a className='text-red text-sm font-600'>{selected}</a>
        <Image
          src={images.icons.arrowRed}
          width={16}
          height={16}
          alt={selected}
        />
      </button>
      {isSheetVisible && (
        <Backdrop hide={() => setIsSheetVisible(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.pickerWrapper} p-3`}>
            <div className='w-full flex justify-center items-center'>
              <a>{title}</a>
            </div>
            <button
              onClick={() => setIsSheetVisible(false)}
              className='absolute top-3 right-3'>
              <Image
                src={images.icons.cancel}
                width={24}
                height={24}
                alt='닫기'
              />
            </button>
            <div className='gap12 mt-3' />
            <div className='flex flex-col'>
              {list.map((v, i) => (
                <button
                  onClick={() => {
                    setSelected(v);
                    setIsSheetVisible(false);
                  }}
                  key={i}
                  className='w-full'>
                  {renderItem(v)}
                </button>
              ))}
            </div>
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default CBottomSheet;
