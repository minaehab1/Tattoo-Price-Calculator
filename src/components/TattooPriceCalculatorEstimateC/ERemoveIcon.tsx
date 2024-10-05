import { memo, SVGProps } from 'react';

const ERemoveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 4L4 12' stroke='#323743' strokeWidth={1.37143} strokeMiterlimit={10} strokeLinecap='square' />
    <path d='M12 12L4 4' stroke='#323743' strokeWidth={1.37143} strokeMiterlimit={10} strokeLinecap='square' />
  </svg>
);

const Memo = memo(ERemoveIcon);
export { Memo as ERemoveIcon };
