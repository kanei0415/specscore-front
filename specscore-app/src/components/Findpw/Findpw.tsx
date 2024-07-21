'use client';

import CButton from '@components/common/CButton/CButton';
import CHeader from '@components/common/CHeader/CHeader';
import CInput from '@components/common/CInput/CInput';
import CTabLayout from '@components/common/CTabLayout/CTabLayout';

const Findpw = () => {
  return (
    <section className='root flex flex-col'>
      <CHeader label='비밀번호 찾기' prev='/login' />
      <CTabLayout
        tabs={['email', 'phone']}
        label={(l) => (l == 'email' ? '이메일 인증' : '연락처 인증')}
        rendering={(l) => {
          return (
            <div className='p-3 mt-3 flex flex-col'>
              <CInput
                label='아이디'
                placeholder='아이디를 입력해주세요'
                onChange={() => {}}
                type='text'
              />
              <div className='flex flex-row items-center'>
                <CInput
                  label={`가입된 ${l == 'email' ? '이메일' : '연락처'}`}
                  placeholder={`${
                    l == 'email' ? '이메일' : '연락처'
                  }를 입력해주세요`}
                  onChange={() => {}}
                  type='text'
                />
                <div className='gap12' />
                <CButton label='인증번호' onClick={() => {}} />
              </div>
              <CInput
                label='인증번호'
                placeholder='인증번호를 입력해주세요'
                onChange={() => {}}
                type='text'
              />
              <div className='flex flex-row mt-6'>
                <CButton label='비밀번호 변경' onClick={() => {}} />
              </div>
            </div>
          );
        }}
      />
    </section>
  );
};

export default Findpw;
