'use client';

import CHeader from '@components/common/CHeader/CHeader';
import styles from './styles/search.module.css';
import Image from 'next/image';
import images from '@assets/images';
import CLectureRow from '@components/common/CLectureRow/CLectureRow';

type Props = {
  list: string[];
  tag: string | null;
  onChange: (s: string) => void;
  onTagSelected: (t: string | null) => void;
  onSearchClicked: () => void;
};

const Search = ({
  list,
  tag,
  onChange,
  onTagSelected,
  onSearchClicked,
}: Props) => {
  return (
    <section className={`root flex flex-col overflow-scroll`}>
      <CHeader label='강의 검색' prev='/' />
      <div className={`${styles.inputWrapper} flex flex-row items-center`}>
        <input
          onChange={(e) => onChange(e.target.value)}
          placeholder='강의 제목 및 강사 이름으로 검색하기'
          className={`${styles.searchInput} flex-1`}
        />
        {tag && (
          <>
            <div className='gap12' />
            <button onClick={() => onTagSelected(null)}>
              <div
                className={`font-bold text-sm text-white bg-red ${styles.tagItem}`}>
                {`#${tag}`}
              </div>
            </button>
          </>
        )}
        <div className='gap12' />
        <button onClick={onSearchClicked}>
          <Image src={images.icons.search} width={24} height={24} alt='검색' />
        </button>
      </div>
      <div className='min-h-12 pl-3 mt-3 overflow-x-auto whitespace-nowrap'>
        {[
          '자소서',
          '자소서',
          '자소서',
          '자소서',
          '자소서',
          '자소서',
          '자소서',
          '자소서',
          '자소서',
        ].map((v, i) => (
          <button
            onClick={() => onTagSelected(v)}
            key={i}
            className={`inline-block font-bold text-sm text-white bg-red mr-3 ${styles.tagItem}`}>
            {`#${v}`}
          </button>
        ))}
      </div>
      <div className='flex-1 flex flex-col'>
        {list.length == 0 ? (
          <div className='flex-1 flex flex-col justify-center items-center'>
            <Image src={images.logo.x3} width={72} height={72} alt='로고' />
            <div className='gap4' />
            <span>{'강의 제목 및 강사 이름으로'}</span>
            <span>{'검색해보세요!'}</span>
          </div>
        ) : (
          <>
            <div className='mb-3 p-3 flex flex-row justify-between'>
              <span className='text-black'>
                <span className='text-xl'>{`"첨삭"`}</span>
                {'의 검색 결과'}
              </span>
              <div
                className={`inline-block font-bold text-sm text-white bg-red ${styles.tagItem}`}>
                {`#자소서`}
              </div>
            </div>
            <div className='pl-3 pr-3 mb-1'>
              {list.map((v, i) => (
                <CLectureRow lecture={{}} key={i} isVisibleScore />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Search;
