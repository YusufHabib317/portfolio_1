/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import { codeLang } from '@/data';
import { TechIcon } from './techIcon';
import { twMerge } from 'tailwind-merge';
import { Fragment } from 'react';

type ToolboxItemsProps = {
   className?: string;
   itemsWrapperClassName?: string;
}

export function ToolboxItems(props:ToolboxItemsProps) {
  const { className, itemsWrapperClassName } = props;

  return (
    <div className={twMerge('flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]', className)}>
      <div className={twMerge('flex flex-none gap-6 py-0.5 pr-6', itemsWrapperClassName)}>
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {codeLang.map((c) => (
              <div
                key={c.id}
                className="inline-flex items-center gap-2 py-2 px-3 rounded-lg outline outline-2 outline-white/10"
              >
                <TechIcon Icon={c.iconType} />
                <div className="font-semibold">{c.name}</div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
