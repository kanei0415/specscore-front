import images from '@assets/images';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  label: string;
  prev: string;
};

const CHeader = ({ label, prev }: Props) => {
  return (
    <header className='h-12 flex justify-center items-center relative'>
      <div className='absolute left-3 top-3'>
        <Link href={prev}>
          <Image
            src={images.icons.back}
            width={24}
            height={24}
            alt='뒤로가기'
          />
        </Link>
      </div>
      <a className='text-black'>{label}</a>
    </header>
  );
};

export default CHeader;
