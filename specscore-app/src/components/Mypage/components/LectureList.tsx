import { LectureType } from '@components/Main/components/HomeTab';
import styles from '../styles/lecture.list.module.css';
import Image from 'next/image';
import images from '@assets/images';

type LectureRowProps = {
  lecture: LectureType;
};

const LectureRow = ({ lecture }: LectureRowProps) => {
  return (
    <div className={`${styles.wrapper} flex flex-row items-center mb-3`}>
      <div className={styles.image} />
      <div className='ml-2 flex flex-col items-start flex-1'>
        <span className='truncate'>{'자소서 잘 쓰는 법'}</span>
        <div className='mr-1 flex flex-row items-center'>
          <span className='text-sm'>{'최근 학습일 2024/07/05'}</span>
        </div>
      </div>
      <div className='ml-2 flex flex-col items-end'>
        <div className='flex flex-row items-center'>
          <Image src={images.icons.edit} width={24} height={24} alt='작성자' />
          <span className='ml-1 text-gray text-sm'>{'자소서 마스터'}</span>
        </div>
        <div className='flex flex-row items-center'>
          <span className='text-sm'>{'진도율'}</span>
          <div className='gap12' />
          <span className='font-bold text-red'>{'95'}</span>
          <span className='text-sm'>{'%'}</span>
        </div>
      </div>
    </div>
  );
};

const empty = false;

const LectureList = () => {
  return (
    <div className='flex flex-col p-3'>
      {empty ? (
        <div className='flex flex-col justify-center items-center p-16'>
          <Image src={images.logo.x3} width={72} height={72} alt='로고' />
          <div className='gap8' />
          <span>{'듣고 싶은 강의를'}</span>
          <span>{'수강해 보세요!'}</span>
        </div>
      ) : (
        <>
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
          <LectureRow lecture={{}} />
        </>
      )}
    </div>
  );
};

export default LectureList;
