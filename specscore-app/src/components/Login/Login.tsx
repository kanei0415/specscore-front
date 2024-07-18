'use client';

import images from '@assets/images';
import BreakLine from '@components/common/BreakLine/BreakLine';
import CButton from '@components/common/CButton/CButton';
import CInput from '@components/common/CInput/CInput';
import CLink from '@components/common/CLink/CLink';
import CToggle from '@components/common/CToggle/CToggle';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [isPartners, setIsPartners] = useState(false);

  return (
    <section className='root flex flex-col p-3'>
      <div className='flex flex-row justify-end items-center'>
        <div className={`font-bold ${isPartners ? 'text-black' : 'text-red'}`}>
          {isPartners ? '고객으로 전환' : '파트너스 전환'}
        </div>
        <div className='gap4' />
        <CToggle onChanged={setIsPartners} />
      </div>
      <div className='flex-1' />
      <div className='flex flex-col items-center w-full'>
        <Image src={images.logo.x3} width={72} height={72} alt='logo' />
        <div className='gap4' />
        <Image src={images.typo.x3} width={150} height={24} alt='typo' />
        <div className='gap4' />
        <span className='font-bold text-lg text-red h-7'>
          {isPartners ? 'P A R T N E R S' : ''}
        </span>
      </div>
      <form className='flex flex-col mt-12'>
        <CInput
          label='아이디'
          placeholder='아이디를 입력해주세요'
          onChange={() => {}}
          type='text'
        />
        <div className='gap4' />
        <CInput
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요'
          onChange={() => {}}
          type='password'
        />
        <div className='gap24' />
        <Link href={'/'}>
          <div className='w-full flex flex-row'>
            <CButton label='로그인' onClick={() => {}} />
          </div>
        </Link>
      </form>
      <div className='mt-12 flex flex-col'>
        <div className='flex flex-row mb-3 justify-between items-center'>
          <span>{'아이디를 잊어버리셨나요?'}</span>
          <CLink label='아이디 찾기' to='/findid' />
        </div>
        <div className='flex flex-row mb-3 justify-between items-center'>
          <span>{'비밀번호를 잊어버리셨나요?'}</span>
          <CLink label='비밀번호 찾기' to='/findpw' />
        </div>
        <BreakLine />
        <div className='flex flex-row mt-3 justify-between items-center'>
          <span>{'아직 계정이 없으신가요?'}</span>
          <CLink label='회원가입 하기' to='/signup' />
        </div>
      </div>
      <div className='flex-1' />
    </section>
  );
};

export default Login;
