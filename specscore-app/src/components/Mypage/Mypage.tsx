'use client';

import images from '@assets/images';
import CHeader from '@components/common/CHeader/CHeader';
import CPlan from '@components/common/CPlan/CPlan';
import CTabLayout from '@components/common/CTabLayout/CTabLayout';
import Image from 'next/image';
import LectureList from './components/LectureList';
import BreakLine from '@components/common/BreakLine/BreakLine';

const Mypage = () => {
  return (
    <section className='root flex flex-col overflow-scroll'>
      <CHeader prev={'/'} label='마이페이지' />
      <BreakLine />
      <article className='flex flex-row p-3 items-center mb-3 mt-3'>
        <div className='flex flex-row items-center'>
          <Image
            src={images.icons.profile}
            width={24}
            height={24}
            alt='사용자명'
          />
          <span className='ml-1'>{'나는 홍길동이다'}</span>
        </div>
        <div className='ml-3'>
          <CPlan plan='Basic' />
        </div>
      </article>
      <BreakLine />
      <div className='p-3 mb-3 mt-6 h-6 w-full flex flex-row items-center'>
        <Image
          src={images.icons.recommandGray}
          width={24}
          height={24}
          alt='좋아요 목록'
        />
        <div className='gap12' />
        <span>{'좋아요 목록'}</span>
        <div className='flex-1' />
        <Image
          src={images.icons.arrow}
          width={16}
          height={16}
          alt='좋아요 목록'
        />
      </div>
      <div className='p-3 mb-3 h-6 w-full flex flex-row items-center'>
        <Image
          src={images.icons.payment}
          width={24}
          height={24}
          alt='결제내역'
        />
        <div className='gap12' />
        <span>{'결제내역'}</span>
        <div className='flex-1' />
        <Image src={images.icons.arrow} width={16} height={16} alt='결제내역' />
      </div>
      <div className='p-3 mb-6 h-6 w-full flex flex-row items-center'>
        <Image
          src={images.icons.account}
          width={24}
          height={24}
          alt='계정 관리'
        />
        <div className='gap12' />
        <span>{'계정 관리'}</span>
        <div className='flex-1' />
        <Image
          src={images.icons.arrow}
          width={16}
          height={16}
          alt='계정 관리'
        />
      </div>
      <BreakLine />
      <div className='mt-3'>
        <CTabLayout
          tabs={['resume', 'lecture']}
          label={(t) => (t == 'resume' ? '자기소개서' : '수강중 강의')}
          rendering={(t) => {
            return <LectureList />;
          }}
        />
      </div>
    </section>
  );
};

export default Mypage;
