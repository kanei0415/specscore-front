import CBottomSheet from '@components/common/CButtonSheet/CBottomSheet';
import CTagPicker from '@components/common/CTagPicker/CTagPicker';
import React from 'react';
import styles from '../styles/lecture.tab.module.css';
import images from '@assets/images';
import Image from 'next/image';

const LectureCard = () => {
  return (
    <div className={`${styles.cardWrapper} shadow-lg`}>
      <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col'>
        <img src={images.lecture.lecture01} className='flex-1' />
        <div className='flex-1 flex flex-col bg-white p-3'>
          <div className='w-full flex flex-row justify-between items-center'>
            <span className='text-gray text-sm'>{'강사 이름'}</span>
            <div className='flex flex-row items-center'>
              <div className='flex flex-row items-center'>
                <div className='flex flex-row items-center'>
                  <Image
                    src={images.icons.star}
                    width={24}
                    height={24}
                    alt='평점'
                  />
                  <span className='text-sm'>{'4.8'}</span>
                </div>
                <div className='ml-1 flex flex-row items-center'>
                  <Image
                    src={images.icons.good}
                    width={24}
                    height={24}
                    alt='개추'
                  />
                  <span className='text-sm'>{'234'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1' />
          <div className='w-full'>
            <span className='text-sm'>
              {'한국에서 취업합격 끝장을 알리다.'}
            </span>
          </div>
          <div className='flex-1' />
          <div className='w-full'>
            <span className='text-lg font-black'>{'130,000원'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const LectureTab = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-row p-3 items-center justify-between'>
        <span>{'전체 강의'}</span>
        <div className='flex flex-row items-center'>
          <CTagPicker prev={{ label: '자소서' }} onTagPicked={(tag) => {}} />
          <div className='gap12' />
          <CBottomSheet
            title='강의 기준'
            prev='최신순'
            list={['최신순', '인기순', '평점순']}
            onItemSelected={() => {}}
            renderItem={(item) => (
              <div className='w-full flex justify-center items-center mb-3'>
                <span>{item}</span>
              </div>
            )}
          />
        </div>
      </div>
      <article className='grid grid-cols-2 gap-12 p-3'>
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
      </article>
    </section>
  );
};

export default React.memo(LectureTab);
