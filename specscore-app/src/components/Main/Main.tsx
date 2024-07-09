import Image from 'next/image';
import style from './styles/main.module.css';
import images from '@assets/images';
import Link from 'next/link';
import Slide from '@components/common/Slide/Slide';

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
      <section className='flex'>
        <Slide>
          {[
            images.mainBanner.type01,
            images.mainBanner.type02,
            images.mainBanner.type03,
          ].map((b, i) => (
            <img key={i} src={b} alt='banner' />
          ))}
        </Slide>
      </section>
    </main>
  );
};

export default Main;