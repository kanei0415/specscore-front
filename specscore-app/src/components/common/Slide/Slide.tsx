'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './styles/slide.module.css';
import images from '@assets/images';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  readonly children: React.ReactNode[];
};

const CNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.navigation}>
      <button onClick={() => swiper.slidePrev()}>
        <Image
          src={images.icons.prev}
          width={24}
          height={24}
          alt='prev button'
        />
      </button>

      <button onClick={() => swiper.slideNext()}>
        <Image
          src={images.icons.next}
          width={24}
          height={24}
          alt='prev button'
        />
      </button>
    </div>
  );
};

const CPagenation = ({ index }: { index: number }) => {
  const swiper = useSwiper();

  return (
    <div className={styles.pagenation}>
      {swiper.slides.map((_, i) => (
        <button onClick={() => swiper.slideTo(i)} key={i}>
          {index == i ? (
            <div className={`${styles.item} bg-red`} />
          ) : (
            <div className={`${styles.item} bg-black`} />
          )}
        </button>
      ))}
    </div>
  );
};

const Slide = ({ children }: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <Swiper
      onSlideChange={(s) => setIndex(s.activeIndex)}
      modules={[Pagination, Navigation]}>
      <CNavigation />
      <CPagenation index={index} />
      {children.map((c, i) => (
        <SwiperSlide key={i}>{c}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
