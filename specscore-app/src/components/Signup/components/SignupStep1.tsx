'use client';

import React from 'react';
import CButton from '@components/common/CButton/CButton';
import CCheck from '@components/common/CCheck/CCheck';
import { useState } from 'react';

type Props = {
  fillForm: () => void;
  onNextClicked: () => void;
};

const SignupStep1 = ({ fillForm, onNextClicked }: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex-1 flex flex-col p-3'>
      <div>{'개인정보 이용 약관 동의'}</div>
      <div className='flex-1 flex flex-col mt-3 text-sm p-3 border border-gray rounded-sm whitespace-pre-line'>
        {`1. 제1조 (목적)
이 약관은 스펙스코어 (이하 "서비스")의 이용 조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.

2. 제2조 (용어의 정의)
1. "서비스"란 스펙스코어가 제공하는 모든 관련 서비스를 의미합니다. 
2. "회원"이란 본 약관에 동의하고 서비스 이용 자격을 부여받은 자를 의미합니다. 
3. "이용자"란 서비스에 접속하여 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 의미합니다.

3. 제3조 (약관의 게시 및 개정)
1. 본 약관은 서비스 초기화면에 게시하거나 기타 방법으로 회원에게 공지함으로써 효력이 발생합니다. 
2. 회사는 관련 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있으며, 개정된 약관은 공지함으로써 효력이 발생합니다.

4. 제4조 (회원가입 및 이용계약의 성립)
1. 회원가입은 이용자가 본 약관에 동의하고, 회사가 정한 절차에 따라 회원가입 신청을 완료한 후, 회사가 이를 승낙함으로써 성립합니다.
2. 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나, 사후에 이용계약을 해지할 수 있습니다.
 - 가입 신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우
- 실명이 아니거나 타인의 명의를 이용한 경우
- 허위 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우
- 기타 회원으로 등록하는 것이 서비스의 기술상 현저히 지장이 있다고 판단되는 경우

5. 제5조 (회원정보의 변경)
회원은 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 회원은 가입신청 시 기재한 사항이 변경되었을 경우, 즉시 온라인 수정을 하거나 기타 방법으로 회사에 변경사항을 알려야 합니다.

6. 제6조 (회원의 아이디 및 비밀번호 관리)
1. 아이디와 비밀번호에 대한 관리책임은 회원에게 있으며, 이를 제3자가 이용하도록 하여서는 안 됩니다.
2. 회원은 아이디 및 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우, 즉시 회사에 통지하고 회사의 안내에 따라야 합니다.

7. 제7조 (회원 탈퇴 및 자격 상실 등)
1. 회원은 언제든지 탈퇴를 요청할 수 있으며, 회사는 즉시 회원 탈퇴를 처리합니다.
2. 회사는 다음 각 호의 사유에 해당하는 경우, 회원 자격을 제한 또는 정지시킬 수 있습니다
 - 가입 신청 시에 허위 내용을 등록한 경우
- 서비스 이용과 관련하여 회원이 부담하는 채무를 기일 내에 이행하지 않는 경우
- 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
- 기타 법령 및 본 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우`}
      </div>
      <div className='flex flex-row justify-between items-center mt-3 mb-3'>
        <span className='text-sm'>{'위 이용 약관에 동의하시나요?'}</span>
        <CCheck shape='rounded' onChecked={setChecked}>
          <span className='text-sm text-gray'>{'동의합니다'}</span>
        </CCheck>
      </div>
      <div className='flex flex-row'>
        <CButton label='다음으로' onClick={onNextClicked} disabled={!checked} />
      </div>
    </div>
  );
};

export default React.memo(SignupStep1);
