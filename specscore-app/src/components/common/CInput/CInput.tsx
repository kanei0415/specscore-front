'use client';

type Props = {
  label: string;
  placeholder: string;
  isNeeded?: boolean;
  onChange: (s: string) => void;
  type: 'text' | 'password' | 'date';
  defaultValue?: string;
  error?: string;
};

const CInput = ({
  label,
  placeholder,
  isNeeded = true,
  onChange,
  type,
  defaultValue,
  error,
}: Props) => {
  return (
    <div className='flex flex-col'>
      <span className='h-4 text-xs'>
        {label} {isNeeded && <span className='text-red'>{'*'}</span>}
      </span>
      <div className='gap2' />
      <input
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        className='h-12 p-3 border border-gray rounded-sm text-sm focus:border-2 focus:border-red'
      />
      <div className='gap2' />
      <span className='h-4 text-xs text-red'>{error}</span>
    </div>
  );
};

export default CInput;
