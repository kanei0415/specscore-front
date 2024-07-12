'use client';

import images from '@assets/images';
import Slide from '@components/common/Slide/Slide';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/recruit.tab.module.css';
import CBottomSheet from '@components/common/CButtonSheet/CBottomSheet';

const RecruitTab = () => {
  const [recruits, setRecruits] = useState([1, 2, 3]);

  return (
    <section className='flex flex-1 flex-col'>
      <div className='flex flex-row items-center p-3'>
        <Image
          src={images.icons.fire}
          width={24}
          height={24}
          alt='인기 채용공고'
        />
        <div className='gap4' />
        <a>{'인기 채용공고'}</a>
      </div>
      <div className={`flex`}>
        <Slide>
          {[
            images.mainBanner.type01,
            images.mainBanner.type02,
            images.mainBanner.type03,
          ].map((b, i) => (
            <img key={i} src={b} alt='banner' />
          ))}
        </Slide>
      </div>
      <div className='mt-6 flex flex-row justify-between items-center pl-3 pr-3'>
        <a>{'지원 가능한 채용공고'}</a>
        <CBottomSheet
          title='채용공고 기준'
          prev='최신순'
          list={['최신순', '인기순']}
          onItemSelected={() => {}}
          renderItem={(item) => (
            <div className='w-full flex justify-center items-center mb-3'>
              <a>{item}</a>
            </div>
          )}
        />
      </div>
      <div className='flex flex-col p-3'>
        {recruits.map((v) => (
          <div key={v}>
            <div className={styles.recruitBanner}>
              <div className={styles.recruitImage} />
            </div>
            <div className='gap12' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(RecruitTab);
