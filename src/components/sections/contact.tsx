/* eslint-disable react/no-unescaped-entities */
import { GrainBg, MainBtn } from '../ui';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';

export function Contact() {
  return (
    <section className="py-16 lg:py:24 pt-12 lg:pt-20">
      <div className="container">
        <div className="relative bg-gradient-to-r from-emerald-300 to-sky-400
           px-10 py-8 rounded-3xl text-gray-900 text-center md:text-left"
        >
          <GrainBg />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets Create Something Amazing Together
              </h2>

              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
              </p>
            </div>

            <div className="">
              <MainBtn main title="Contact Me" rightIcon={<ArrowUpRight />} bg="black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
