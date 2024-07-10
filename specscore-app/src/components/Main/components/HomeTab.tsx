import React from 'react';
import images from '@assets/images';
import Slide from '@components/common/Slide/Slide';
import CTabLayout from '@components/common/CTabLayout/CTabLayout';

const HomeTab = () => {
  return (
    <section>
      <Slide>
        {[
          images.mainBanner.type01,
          images.mainBanner.type02,
          images.mainBanner.type03,
        ].map((b, i) => (
          <img key={i} src={b} alt='banner' />
        ))}
      </Slide>
      <CTabLayout
        tabs={['recruit', 'lecture']}
        label={(t) => (t == 'recruit' ? '채용 공고' : '강의')}
        rendering={(t) => {
          if (t == 'recruit') {
            return <div>{'채용 공고'}</div>;
          }

          return <div>{'강의'}</div>;
        }}
      />
    </section>
  );
};

export default React.memo(HomeTab);
