'use client';

import Image from 'next/image';
import style from './styles/main.module.css';
import images from '@assets/images';
import Link from 'next/link';
import { useState } from 'react';
import HomeTab from './components/HomeTab';
import RecruitTab from './components/RecruitTab';
import LectureTab from './components/LectureTab';

export type Tabs = 'home' | 'recruit' | 'lecture';

type Props = {
  isLogined: boolean;
};

const Main = ({ isLogined }: Props) => {
  const [tab, setTab] = useState<Tabs>('home');

  return (
    <main className='root flex flex-col overflow-scroll scroll-y'>
      <header
        className={`${style.header} flex flex-row justify-between items-center`}>
        <div className='flex flex-row'>
          <Image
            src={images.logo.x1}
            width={24}
            height={24}
            alt='specscore logo'
          />
          <div className={style.gap4} />
          <Image
            src={images.typo.x1}
            width={150}
            height={24}
            alt='specscore typo'
          />
        </div>
        <nav>
          <ul className='flex flex-row'>
            <li>
              <Link href={'/search'}>
                <Image
                  src={images.icons.search}
                  width={24}
                  height={24}
                  alt='search btn'
                />
              </Link>
            </li>
            <div className='gap12' />
            <li>
              <Link href={isLogined ? '/mypage' : '/login'}>
                <Image
                  src={images.icons.user}
                  width={24}
                  height={24}
                  alt='mypage btn'
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='flex-1 scroll-y'>
        {tab == 'home' && <HomeTab />}
        {tab == 'recruit' && <RecruitTab />}
        {tab == 'lecture' && <LectureTab />}
      </div>
      <nav
        className={`${style.bottomTab} flex flex-row sticky bottom-0 bg-white`}>
        <button
          onClick={() => setTab('home')}
          className='flex flex-col flex-1 justify-center items-center'>
          <Image
            src={tab == 'home' ? images.icons.homeFill : images.icons.home}
            alt='홈 선택'
            width={24}
            height={24}
          />
          {tab == 'home' ? (
            <span className='text-xs text-black'>{'홈'}</span>
          ) : (
            <span className='text-xs text-gray'>{'홈'}</span>
          )}
        </button>
        <button
          onClick={() => setTab('recruit')}
          className='flex flex-col flex-1 justify-center items-center'>
          <Image
            src={
              tab == 'recruit' ? images.icons.recruitFill : images.icons.recruit
            }
            alt='채용 공고 선택'
            width={24}
            height={24}
          />
          {tab == 'recruit' ? (
            <span className='text-xs text-black'>{'채용 공고'}</span>
          ) : (
            <span className='text-xs text-gray'>{'채용 공고'}</span>
          )}
        </button>
        <button
          onClick={() => setTab('lecture')}
          className='flex flex-col flex-1 justify-center items-center'>
          <Image
            src={
              tab == 'lecture' ? images.icons.lectureFill : images.icons.lecture
            }
            alt='강의 선택'
            width={24}
            height={24}
          />
          {tab == 'lecture' ? (
            <span className='text-xs text-black'>{'강의'}</span>
          ) : (
            <span className='text-xs text-gray'>{'강의'}</span>
          )}
        </button>
      </nav>
    </main>
  );
};

export default Main;
