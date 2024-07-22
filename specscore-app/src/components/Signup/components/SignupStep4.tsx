'use client';

import CButton from '@components/common/CButton/CButton';
import CCheck from '@components/common/CCheck/CCheck';

type Props = {
  fillForm: () => void;
  onNextClicked: () => void;
};

const SignupStep4 = ({ fillForm, onNextClicked }: Props) => {
  return (
    <div className='flex-1 flex flex-col p-3'>
      <div className='flex flex-col'>
        <CCheck shape='rounded' onChecked={() => {}}>
          <span className='ml-1 text-gray'>{'자소서 첨삭을 위해'}</span>
        </CCheck>
        <div className='gap12' />
        <CCheck shape='rounded' onChecked={() => {}}>
          <span className='ml-1 text-gray'>
            {'내 이력서의 수준을 알고 싶어서'}
          </span>
        </CCheck>
        <div className='gap12' />
        <CCheck shape='rounded' onChecked={() => {}}>
          <span className='ml-1 text-gray'>{'면접 준비'}</span>
        </CCheck>
      </div>
      <div className='flex-1' />
      <div className='flex flex-row'>
        <CButton label='가입완료' onClick={onNextClicked} />
      </div>
    </div>
  );
};

export default SignupStep4;
