'use client';

import { portfolioProjects } from '@/data';
import { MainBtn } from './btn';
import Arrow from '@/assets/icons/arrow-up-right.svg';
import CheckIcon from '@/assets/icons/check-circle.svg';
import Image from 'next/image';
import { GrainBg } from './grain-bg';

type ProjectProps = {
  p: typeof portfolioProjects[0],
  i:number
}

export function Project(props:ProjectProps) {
  const { p, i } = props;

  return (
    <div
      className="pt-8 md:pt-12 px-8 md:px-10 lg:pt-16 lg:px-20 flex flex-col lg:flex-row gap-4 card-border
       sticky top-16"
      style={{
        top: `calc(64px + ${i * 40}px)`,

      }}
    >
      <GrainBg />
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <div className="inline-flex gap-2 subtitle-gradient text-sm">
            <span>{p.company}</span>
            <span>&bull;</span>
            <span>{p.year}</span>
          </div>

          <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-4">{p.title}</h3>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {p.results.map((r) => (
              <li key={r.title} className="flex items-center gap-2 text-sm md:text-base text-white/50">
                <CheckIcon className="size-5 md:size-6 text-white/50" />
                <span>{r.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 md:mt-6 w-full lg:w-48">
            <MainBtn main title="Visit live site" leftIcon={<Arrow />} link={p.link} />
          </div>
        </div>

        <div className="relative">
          <Image
            src={p.image}
            alt={p.title}
            className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
