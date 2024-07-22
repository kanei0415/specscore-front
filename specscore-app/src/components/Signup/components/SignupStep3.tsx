'use client';

import CButton from '@components/common/CButton/CButton';
import CInput from '@components/common/CInput/CInput';
import CTabLayout from '@components/common/CTabLayout/CTabLayout';

type Props = {
  fillForm: () => void;
  onNextClicked: () => void;
};

const SignupStep3 = ({ fillForm, onNextClicked }: Props) => {
  return (
    <div className='flex-1 flex flex-col'>
      <CTabLayout
        tabs={['email', 'phone']}
        label={(l) => (l == 'email' ? '이메일 인증' : '연락처 인증')}
        rendering={(l) => {
          return (
            <div className='p-3 mt-3 flex flex-col'>
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
                <CButton label='인증하기' onClick={() => {}} />
              </div>
            </div>
          );
        }}
      />
      <div className='flex-1' />
      <div className='flex flex-row p-3'>
        <CButton label='다음으로' onClick={onNextClicked} />
      </div>
    </div>
  );
};

export default SignupStep3;
