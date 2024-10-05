import { memo, SVGProps } from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.78571 8L6.78571 12L14.2143 4.57143'
      stroke='white'
      strokeWidth={1.37143}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);

const Memo = memo(CheckIcon);
export { Memo as CheckIcon };
