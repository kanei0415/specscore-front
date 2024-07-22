import images from '@assets/images';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  label: string;
  prev: string;
  disabled?: boolean;
  onBackClicked?: () => void;
};

const CHeader = ({ label, prev, disabled = false, onBackClicked }: Props) => {
  return (
    <header className='min-h-12 flex justify-center items-center relative'>
      <div className='absolute left-3 top-3'>
        {disabled ? (
          <button onClick={onBackClicked}>
            <Image
              src={images.icons.back}
              width={24}
              height={24}
              alt='뒤로가기'
            />
          </button>
        ) : (
          <Link href={prev}>
            <Image
              src={images.icons.back}
              width={24}
              height={24}
              alt='뒤로가기'
            />
          </Link>
        )}
      </div>
      <span className='text-black'>{label}</span>
    </header>
  );
};

export default CHeader;
