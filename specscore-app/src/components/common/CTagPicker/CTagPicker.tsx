'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './styles/ctag.picker.module.css';
import Image from 'next/image';
import images from '@assets/images';
import Backdrop from '../Backdrop/Backdrop';

export type TagType = {
  label: string;
};

type Props = {
  prev: TagType;
  onTagPicked: (tag: TagType) => void;
  arrowVisible?: boolean;
};

const TMP: TagType[] = [
  { label: '이력서' },
  { label: '자기소개서' },
  { label: '면접' },
  { label: '직무 트렌드' },
];

const CTagPicker = ({ prev, onTagPicked, arrowVisible = false }: Props) => {
  const [tag, setTag] = useState(prev);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const onTagClicked = useCallback(
    (tag: TagType) => {
      setTag(tag);
      onTagPicked(tag);
    },
    [onTagPicked],
  );

  return (
    <>
      <button
        onClick={() => setIsPickerVisible(true)}
        className='flex flex-row items-center'>
        <div
          className={`font-bold text-sm text-white bg-red ${styles.tagItem}`}>
          {`#${tag.label}`}
        </div>
        <div className='gap4' />
        {arrowVisible && (
          <Image
            src={images.icons.arrow}
            width={16}
            height={16}
            alt='카테고리 선택'
          />
        )}
      </button>
      {isPickerVisible && (
        <Backdrop hide={() => setIsPickerVisible(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.pickerWrapper} bg-white p-3 flex flex-col`}>
            <div
              className={`${styles.pickerRow} flex justify-center items-center`}>
              <span>{'카테고리 선택'}</span>
            </div>
            <button
              onClick={() => setIsPickerVisible(false)}
              className={styles.closeBtn}>
              <Image
                src={images.icons.cancel}
                width={24}
                height={24}
                alt='닫기'
              />
            </button>
            {[
              TMP.map((v, i) => (
                <button
                  onClick={() => {
                    onTagClicked(v);
                    setIsPickerVisible(false);
                  }}
                  key={i}
                  className={`${styles.pickerRow} flex flex-row justify-between items-center`}>
                  <div>
                    <span>{v.label}</span>
                  </div>
                  <div>
                    <span className='font-bold text-black text-sm'>
                      <span className='text-red'>{'12'}</span> {' 개의 강의'}
                    </span>
                  </div>
                </button>
              )),
            ]}
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default CTagPicker;
