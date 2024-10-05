import { memo, SVGProps } from 'react';

const Line7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 215 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H215' stroke='#F3F4F6' />
  </svg>
);

const Memo = memo(Line7Icon);
export { Memo as Line7Icon };
