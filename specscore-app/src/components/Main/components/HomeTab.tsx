import React, { useState } from 'react';
import images from '@assets/images';
import Slide from '@components/common/Slide/Slide';
import CTabLayout from '@components/common/CTabLayout/CTabLayout';
import Image from 'next/image';
import styles from '../styles/home.tab.module.css';
import CTagPicker from '@components/common/CTagPicker/CTagPicker';
import BreakLine from '@components/common/BreakLine/BreakLine';
import CLectureRow from '@components/common/CLectureRow/CLectureRow';

const RecuritContent = () => {
  const [recruits, setRecruits] = useState([1, 2, 3]);

  return (
    <article className='flex flex-col p-3'>
      <div className='flex flex-row items-center'>
        <Image
          src={images.icons.fire}
          width={24}
          height={24}
          alt='인기 채용공고'
        />
        <div className='gap4' />
        <a className='text-black'>{'인기 채용 공고'}</a>
      </div>
      <div className='gap12' />
      {recruits.map((v) => (
        <div key={v}>
          <div className={styles.recruitBanner}>
            <div className={styles.recruitImage} />
          </div>
          <div className='gap12' />
        </div>
      ))}
    </article>
  );
};

export type LectureType = {};

const LectureCard = () => {
  return (
    <div className={`${styles.lectureCard}`}>
      <div className='flex flex-col items-center'>
        <div className={styles.lectureImage} />
        <div className='gap4' />
        <a className={`${styles.lectureTitle} text-sm text-black truncate`}>
          {'자소서 잘 쓰는 법'}
        </a>
        <div className='gap4' />
        <div className='flex flex-row items-center'>
          <Image src={images.icons.star} width={24} height={24} alt='평점' />
          <a>{'4.8 (123)'}</a>
        </div>
        <div>
          <a>{'12,000₩'}</a>
        </div>
      </div>
    </div>
  );
};

const LectureContent = () => {
  return (
    <article className='flex flex-col'>
      <div className='flex flex-row p-3 justify-between'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row items-center'>
            <Image
              src={images.icons.rank}
              width={24}
              height={24}
              alt='최고 평점 강의'
            />
            <div className='gap4' />
            <a className='text-black'>{'최고 평점 강의'}</a>
          </div>
        </div>
        <CTagPicker
          prev={{ label: '자소서' }}
          onTagPicked={(tag) => {}}
          arrowVisible
        />
      </div>
      <div className='gap12' />
      <div className='overflow-x-auto whitespace-nowrap pl-3'>
        {[1, 2, 3, 4, 5, 6, 7].map((v, i) => (
          <LectureCard key={i} />
        ))}
      </div>
      <div className='gap12' />
      <BreakLine />
      <div className='flex flex-col'>
        <div className='flex flex-row p-3 justify-between'>
          <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center'>
              <Image
                src={images.icons.fire}
                width={24}
                height={24}
                alt='인기강의'
              />
              <div className='gap4' />
              <a className='text-black'>{'인기강의'}</a>
            </div>
          </div>
          <CTagPicker
            prev={{ label: '자소서' }}
            onTagPicked={(tag) => {}}
            arrowVisible
          />
        </div>
      </div>
      <div className='p-3'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => (
          <div className='mb-3 flex flex-row items-center relative' key={i}>
            {i <= 2 && (
              <div className='absolute left-6 top-0'>
                <Image
                  src={images.icons.crown}
                  width={24}
                  height={24}
                  alt='인기 랭킹 상위'
                />
              </div>
            )}
            <div className='w-6 h-6 flex justify-center items-center'>
              <a className='text-2xl font-bold text-black'>{i + 1}</a>
            </div>
            <div className='gap12' />
            <div className='flex-1'>
              <CLectureRow lecture={{}} isVisibleRecommandCounter />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

const HomeContent = {
  RecuritContent: React.memo(RecuritContent),
  LectureContent: React.memo(LectureContent),
};

const HomeTab = () => {
  return (
    <section>
      <Slide>
        {[
          images.mainBanner.type01,
          images.mainBanner.type02,
          images.mainBanner.type03,
        ].map((b, i) => (
          <img key={i} src={b} alt='banner' />
        ))}
      </Slide>
      <CTabLayout
        tabs={['recruit', 'lecture']}
        label={(t) => (t == 'recruit' ? '채용 공고' : '강의')}
        rendering={(t) => {
          if (t == 'recruit') {
            return <HomeContent.RecuritContent />;
          }

          return <HomeContent.LectureContent />;
        }}
      />
    </section>
  );
};

export default React.memo(HomeTab);
