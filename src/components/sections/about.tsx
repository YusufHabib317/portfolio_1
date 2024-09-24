'use client';

import Image from 'next/image';
import { AboutTitle, SectionHead, ToolboxItems } from '../ui';
import bookImg from '@/assets/images/book-cover.png';
import map from '@/assets/images/map.png';
import smileFace from '@/assets/images/memoji-smile.png';
import { hobbies } from '@/data';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const constrainRef = useRef(null);
  return (
    <section className="py-20 lg:py:24 overflow-x-clip">
      <div className="container">
        <SectionHead
          subTitle="About Me"
          title="A Glimpse Into My World"
          sectionDescription="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="flex flex-col mt-20 gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <div className="card-border px-8 md:px-10 py-6 md:py-8 flex flex-col h-[320px] md:col-span-2 lg:col-span-1">
              <AboutTitle title="My Reads" desc="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImg} alt="book cover" className="" />
              </div>
            </div>
            <div className="card-border h-[320px] md:col-span-3 lg:col-span-2">
              <AboutTitle
                title="My Toolbox"
                desc="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="px-8 md:px-10 py-6 md:py-8"
              />
              <ToolboxItems itemsWrapperClassName="animate-move-left [animation-duration:50s]" />
              <ToolboxItems className="mt-6 " itemsWrapperClassName="animate-move-right [animation-duration:50s]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <div className="card-border h-[320px] px-0 flex flex-col md:col-span-3 lg:col-span-2">
              <AboutTitle
                title="Beyond The Code"
                desc="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((h) => (
                  <motion.div
                    drag
                    dragConstraints={constrainRef}
                    key={h.title}
                    className="inline-flex gap-2 items-center px-6 py-1.5 rounded-full
                           bg-gradient-to-r from-emerald-300 to-sky-400
                           absolute"
                    style={{
                      left: h.left,
                      top: h.top,
                      cursor: 'pointer',
                    }}
                  >
                    <span className="font-medium text-gray-950">{h.title}</span>
                    <span>{h.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="card-border h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={map} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 size-20 rounded-full
               after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2
               after:rounded-full after:outline-gray-950/30
               "
              >
                <div className="absolute inset-0 rounded-full
                 bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"
                />
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image src={smileFace} alt="smile face" className="size-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
