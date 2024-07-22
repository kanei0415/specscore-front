import images from '@assets/images';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  label: string;
  to: string;
};

const CLink = ({ label, to }: Props) => {
  return (
    <Link href={to}>
      <div className='flex flex-row items-center'>
        <span className='text-sm text-red'>{label}</span>
        <Image src={images.icons.arrowRed} width={16} height={16} alt={label} />
      </div>
    </Link>
  );
};

export default CLink;
