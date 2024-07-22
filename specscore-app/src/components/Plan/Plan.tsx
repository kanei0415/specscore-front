import images from '@assets/images';
import CHeader from '@components/common/CHeader/CHeader';
import Image from 'next/image';
import styles from './styles/plan.module.css';
import CPlan from '@components/common/CPlan/CPlan';

const Plan = () => {
  return (
    <section className='root flex flex-col'>
      <CHeader prev='/mypage' label='결제 플랜' />
      <div className='w-full mt-6 mb-6 flex flex-col items-center'>
        <Image src={images.logo.x3} width={72} height={72} alt='logo' />
        <div className='gap12' />
        <span className='text-sm mb-1'>
          {'스펙스코어가 제공하는 플랜을 통해'}
        </span>
        <span className='text-sm'>{'더 많은 서비스를 이용해보세요!'}</span>
      </div>
      <div className='w-full flex flex-col pl-3 pr-3'>
        <button>
          <div className={`${styles.planWrapper}`}>
            <div className='flex flex-col justify-evenly items-start'>
              <CPlan plan='Basic' tooltipVisible={false} />
              <span className='text-sm mt-1'>
                {'· 자기소개서 전체 무료 열람'}
              </span>
              <span className='text-sm'>{'· 점수화 서비스 2회 제공'}</span>
              <span className='text-sm'>{'· 취업 컨설팅 1회 제공'}</span>
            </div>
            <div className='flex flex-col justify-end'>
              <span className='font-bold text-xl'>{'179,000원'}</span>
            </div>
          </div>
        </button>
        <button>
          <div className={`${styles.planWrapper}`}>
            <div className='flex flex-col justify-evenly items-start'>
              <CPlan plan='Premium' tooltipVisible={false} isRecommanded />
              <span className='text-sm mt-1'>
                {'· 자기소개서 전체 무료 열람'}
              </span>
              <span className='text-sm'>{'· 점수화 서비스 2회 제공'}</span>
              <span className='text-sm'>{'· 취업 컨설팅 1회 제공'}</span>
            </div>
            <div className='flex flex-col justify-end relative'>
              <span className='text-sm text-gray line-through absolute right-6 bottom-6'>
                {'350,000원'}
              </span>
              <span className='font-bold text-xl'>{'179,000원'}</span>
            </div>
          </div>
        </button>
        <button>
          <div className={`${styles.planWrapper}`}>
            <div className='flex flex-col justify-evenly items-start'>
              <CPlan plan='Black' tooltipVisible={false} />
              <span className='text-sm mt-1'>
                {'· 자기소개서 전체 무료 열람'}
              </span>
              <span className='text-sm'>{'· 점수화 서비스 2회 제공'}</span>
              <span className='text-sm'>{'· 취업 컨설팅 1회 제공'}</span>
            </div>
            <div className='flex flex-col justify-end relative'>
              <span className='text-sm text-gray line-through absolute right-6 bottom-6'>
                {'350,000원'}
              </span>
              <span className='font-bold text-xl'>{'179,000원'}</span>
            </div>
          </div>
        </button>
      </div>
      <div className='w-full flex flex-col mt-3'>
        <div className='flex justify-center items-center'>
          <span>
            {'위 서비스들을 '}
            <span className='font-bold text-red'>{'무료'}</span>
            {'로 이용하려면?'}
          </span>
        </div>
      </div>
      <div className='w-full mt-6'>
        <img src={images.plan} alt='국민내일 배움카드' />
      </div>
    </section>
  );
};

export default Plan;
