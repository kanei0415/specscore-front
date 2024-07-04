import Image from 'next/image';
import style from './styles/main.module.css';
import images from '@assets/images';
import Link from 'next/link';

const Main = () => {
  return (
    <main>
      <header
        className={`${style.header} flex flex-row justify-between items-center`}>
        <div className='flex flex-row'>
          <Image
            src={images.logo.x1}
            width={24}
            height={24}
            alt='specscore logo'
          />
          <div className={style.gap4} />
          <Image
            src={images.typo.x1}
            width={150}
            height={24}
            alt='specscore typo'
          />
        </div>
        <nav>
          <ul className='flex flex-row'>
            <li>
              <Link href={'/search'}>
                <Image
                  src={images.icons.search}
                  width={24}
                  height={24}
                  alt='search btn'
                />
              </Link>
            </li>
            <div className={style.gap12} />
            <li>
              <Link href={'/mypage'}>
                <Image
                  src={images.icons.user}
                  width={24}
                  height={24}
                  alt='mypage btn'
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default Main;
