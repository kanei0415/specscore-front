'use client';

type Props = {
  label: string;
  onClick: () => void;
};

const CButton = ({ label, onClick }: Props) => {
  return (
    <button
      className='flex-1 h-12 bg-red flex justify-center items-center text-white rounded-sm'
      onClick={onClick}>
      {label}
    </button>
  );
};

export default CButton;
