/* eslint-disable react/no-array-index-key */
import { Fragment } from 'react';
import { SectionHead, TestimonialItem } from '../ui';
import { testimonials } from '@/data';

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHead
          subTitle="Happy Clients"
          title="What Client Say about Me"
          sectionDescription="Dont just take me word for it. See what my clients have to say about my work"
        />

        <div className="flex mt-12 lg:mt-16 overflow-x-clip py-4 -my-4
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex flex-none pr-8 gap-8 animate-move-left [animation-duration:60s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((t) => <TestimonialItem key={t.name} {...t} />)}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
