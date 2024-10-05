import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1.8 6L4.5 8.7L10.2 3' stroke='#F0F2FF' strokeWidth={0.72} strokeMiterlimit={10} strokeLinecap='square' />
  </svg>
);

const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
