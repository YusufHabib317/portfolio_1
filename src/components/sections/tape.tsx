/* eslint-disable react/no-array-index-key */
import { words } from '@/data';
import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

export function Tape() {
  return (
    <div className="py-16 lg:py:24  overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-4 pr-4 -translate-x-1/2 py-3 animate-move-left [animation-duration:50s]"
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((w) => (
                  <div key={w} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{w}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-3" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
