import { memo, SVGProps } from 'react';

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.6857 5.14286V2.57143'
      stroke='#565D6D'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M8.11428 5.14286V2.57143'
      stroke='#565D6D'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path d='M2.97143 8.57143L21.8286 8.57143' stroke='#565D6D' strokeWidth={2.05714} strokeMiterlimit={10} />
    <path
      d='M21.8286 5.14286L2.97143 5.14286L2.97143 20.5714L21.8286 20.5714L21.8286 5.14286Z'
      stroke='#565D6D'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);

const Memo = memo(CalendarIcon);
export { Memo as CalendarIcon };
