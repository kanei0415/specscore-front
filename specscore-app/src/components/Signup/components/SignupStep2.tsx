'use client';

import React from 'react';
import CButton from '@components/common/CButton/CButton';
import CInput from '@components/common/CInput/CInput';

type Props = {
  fillForm: () => void;
  onNextClicked: () => void;
};

const SignupStep2 = ({ onNextClicked }: Props) => {
  return (
    <div className='flex flex-1 flex-col p-3'>
      <div className='flex flex-row items-center'>
        <CInput
          label='아이디'
          placeholder='아이디를 입력해주세요'
          onChange={() => {}}
          type='text'
        />
        <div className='gap12' />
        <CButton label='중복확인' onClick={() => {}} />
      </div>
      <CInput
        label='비밀번호'
        placeholder='비밀번호를 입력해주세요'
        onChange={() => {}}
        type='password'
      />
      <CInput
        label='비밀번호확인'
        placeholder='비밀번호를 한번 더 입력해주세요'
        onChange={() => {}}
        type='password'
      />
      <CInput
        label='이름'
        placeholder='이름을 입력해주세요'
        onChange={() => {}}
        type='text'
      />
      <CInput
        label='생년월일'
        placeholder='생년월일을 선택해주세요'
        onChange={() => {}}
        type='date'
      />
      <div className='flex-1' />
      <div className='flex flex-row'>
        <CButton label='다음으로' onClick={onNextClicked} />
      </div>
    </div>
  );
};

export default React.memo(SignupStep2);
