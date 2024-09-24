'use client';

import Image from 'next/image';
import emoji from '@/assets/images/memoji-computer.png';
import ArrowUpWrite from '@/assets/icons/arrow-up-right.svg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

import { GrainBg, HeroOrbit, MainBtn } from '../ui';

export function Hero() {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0
      [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]
      pointer-events-none"
      >
        <GrainBg />

        <div className="hero-ring size-[660px]" />
        <div className="hero-ring size-[860px]" />
        <div className="hero-ring size-[1060px]" />
        <div className="hero-ring size-[1260px]" />

        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300 opacity-50" />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300 opacity-50" />
        </HeroOrbit>

        <HeroOrbit size={430} rotation={-15}>
          <SparkleIcon className="size-8 text-emerald-300 opacity-20" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300 opacity-20" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={187}>
          <SparkleIcon className="size-10 text-emerald-300 opacity-20" />
        </HeroOrbit>

        <HeroOrbit size={600} rotation={250}>
          <SparkleIcon className="size-14 text-emerald-300 opacity-60" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={0}>
          <div className="size-3 bg-emerald-300/15 rounded-full" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={500}>
          <div className="size-3 bg-emerald-300/15 rounded-full" />
        </HeroOrbit>

        <HeroOrbit size={750} rotation={800}>
          <div className="size-3 bg-emerald-300/15 rounded-full" />
        </HeroOrbit>

        <HeroOrbit size={800} rotation={-150}>
          <div className="size-3 bg-emerald-300/15 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 bg-emerald-300/15 rounded-full" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={emoji} alt="emoji hero" className="size-[100px]" />

          <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex gap-4 items-center rounded-lg">
            <div className="relative bg-green-500 size-2.5 rounded-full">
              <div className="absolute inset-0 animate-ping-large bg-green-500 size-2.5 rounded-full" />
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional user experiences</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam eius autem
            distinctio obcaecati similique. Sequi dignissimos eius officiis cupiditate repudiandae
            et animi doloremque doloribus, molestias obcaecati voluptatibus porro cumque molestiae.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center items-center mt-8 gap-4">
          <MainBtn main={false} title="Explore My Work" rightIcon={<ArrowUpWrite className="size-4" />} />
          <MainBtn main title="Lets connect" leftIcon="👋🏻" />
        </div>

      </div>
    </section>
  );
}
