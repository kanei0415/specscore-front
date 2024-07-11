import { LectureType } from '@components/Main/components/HomeTab';
import styles from './styles/clecture.row.module.css';
import Image from 'next/image';
import images from '@assets/images';

type Props = {
  lecture: LectureType;
  isVisibleScore?: boolean;
  isVisibleRecommandCounter?: boolean;
};

const CLectureRow = ({
  lecture,
  isVisibleScore = false,
  isVisibleRecommandCounter = false,
}: Props) => {
  return (
    <div className={`${styles.wrapper} flex flex-row items-center`}>
      <div className={styles.image} />
      <div className='ml-2 flex flex-col items-start flex-1'>
        <a className='truncate'>{'자소서 잘 쓰는 법'}</a>
        <div className='mr-1 flex flex-row items-center'>
          {isVisibleScore && (
            <div className='flex flex-row items-center'>
              <Image
                src={images.icons.star}
                width={24}
                height={24}
                alt='평점'
              />
              <a className='ml-1'>{'4.8 (123)'}</a>
            </div>
          )}
          {isVisibleRecommandCounter && (
            <div className='ml-1 flex flex-row items-center'>
              <Image
                src={images.icons.good}
                width={24}
                height={24}
                alt='개추'
              />
              <a className='ml-1'>{'234'}</a>
            </div>
          )}
        </div>
      </div>
      <div className='ml-2 flex flex-col items-end'>
        <div className='flex flex-row items-center'>
          <Image src={images.icons.edit} width={24} height={24} alt='작성자' />
          <a className='ml-1 text-gray text-sm'>{'자소서 마스터'}</a>
        </div>
        <a>{'12,000₩'}</a>
      </div>
    </div>
  );
};

export default CLectureRow;
