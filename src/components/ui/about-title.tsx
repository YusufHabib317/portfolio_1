import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

type AboutTitleProps = {
   title: string;
   desc: string;
   // eslint-disable-next-line react/require-default-props
   className?: string;
}
export function AboutTitle(props:AboutTitleProps) {
  const { title, desc, className } = props;
  return (
    <div className={twMerge('flex flex-col gap-2', className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-white text-3xl">{title}</h3>
      </div>
      <p className="text-white/60 text-sm mt-2">{desc}</p>
    </div>
  );
}
