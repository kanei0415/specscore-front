'use client';

type Props = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const CButton = ({ label, onClick, disabled = false }: Props) => {
  return disabled ? (
    <div className='flex-1 h-12 bg-gray flex justify-center items-center text-black rounded-sm'>
      {label}
    </div>
  ) : (
    <button
      className='flex-1 h-12 bg-red flex justify-center items-center text-white rounded-sm'
      onClick={onClick}>
      {label}
    </button>
  );
};

export default CButton;
