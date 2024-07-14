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
        <a className='truncate'>{'자소서 잘 쓰는 법'}</a>
        <div className='mr-1 flex flex-row items-center'>
          <a className='text-sm'>{'최근 학습일 2024/07/05'}</a>
        </div>
      </div>
      <div className='ml-2 flex flex-col items-end'>
        <div className='flex flex-row items-center'>
          <Image src={images.icons.edit} width={24} height={24} alt='작성자' />
          <a className='ml-1 text-gray text-sm'>{'자소서 마스터'}</a>
        </div>
        <div className='flex flex-row items-center'>
          <a className='text-sm'>{'진도율'}</a>
          <div className='gap12' />
          <a className='font-bold text-red'>{'95'}</a>
          <a className='text-sm'>{'%'}</a>
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
          <a>{'듣고 싶은 강의를'}</a>
          <a>{'수강해 보세요!'}</a>
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
