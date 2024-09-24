import { testimonials } from '@/data';
import { GrainBg } from './grain-bg';
import Image from 'next/image';

type TestimonialItemProps = typeof testimonials[0];

export function TestimonialItem(props:TestimonialItemProps) {
  const {
    avatar, name, position, text,
  } = props;
  return (
    <div className="flex flex-col flex-1 p-6 md:p-8 card-border max-w-xs md:max-w-md transition-all duration-300 hover:-rotate-3">
      <GrainBg />
      <div className="flex items-center gap-4">
        <div className="size-14 inline-flex justify-center items-center rounded-full bg-gray-700 w-15 h-15 flex-shrink-0">
          <Image src={avatar} alt={name} className="max-h-full" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-white font-semibold">{name}</span>
          <span className="text-white/40 text-sm">{position}</span>
        </div>
      </div>
      <p className="text-sm mt-4 md:mt-5 text-justify text-white/70 md:text-base">
        {text}
      </p>
    </div>
  );
}
