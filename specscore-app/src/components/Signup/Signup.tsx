'use client';

import CHeader from '@components/common/CHeader/CHeader';
import React, { useState } from 'react';
import SignupStep1 from './components/SignupStep1';
import SignupStep2 from './components/SignupStep2';

type WrapperProps = {
  step: number;
  readonly children: React.ReactNode[];
};

const SignupStepWrapper = ({ step, children }: WrapperProps) => {
  return children[step];
};

const Signup = () => {
  const [step, setStep] = useState(0);

  return (
    <section className='root flex flex-col overflow-auto'>
      <CHeader
        label='회원가입'
        prev='/login'
        disabled={step != 0}
        onBackClicked={() => setStep((prev) => Math.max(0, prev - 1))}
      />
      <SignupStepWrapper step={step}>
        {[
          <SignupStep1
            key={0}
            onNextClicked={() => setStep(1)}
            fillForm={() => {}}
          />,
          <SignupStep2
            key={1}
            onNextClicked={() => setStep(2)}
            fillForm={() => {}}
          />,
        ]}
      </SignupStepWrapper>
    </section>
  );
};

export default Signup;
