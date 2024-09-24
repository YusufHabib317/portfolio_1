'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type MainBtnProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  title: string;
  onClick?: () => void;
  main?: boolean;
  link?: string;
  bg?: string;
};

export function MainBtn({
  leftIcon,
  rightIcon,
  title,
  onClick,
  main = false,
  link,
  bg,
}: MainBtnProps) {
  const buttonClasses = twMerge(
    'border inline-flex justify-center items-center gap-2 px-4 md:px-6 h-12 rounded-xl cursor-pointer text-sm w-full  w-max',
    main ? 'bg-white text-gray-950 border-white' : 'text-white border-white/15',
    `${bg === 'black' && 'bg-black text-white border-none'}`,
  );

  const content = (
    <>
      {leftIcon && <span>{leftIcon}</span>}
      <span className="font-semibold">{title}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </>
  );

  if (link) {
    return (
      <Link href={link} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}

MainBtn.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  onClick: undefined,
  main: false,
  link: undefined,
  bg: '',
};
