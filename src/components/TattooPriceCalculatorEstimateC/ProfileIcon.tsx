import { memo, SVGProps } from 'react';

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M3 14L25 14' stroke='#8E94A0' strokeWidth={2.4} strokeMiterlimit={10} strokeLinecap='square' />
    <path d='M14 7L25 7' stroke='#8E94A0' strokeWidth={2.4} strokeMiterlimit={10} strokeLinecap='square' />
    <path d='M3 21L14 21' stroke='#8E94A0' strokeWidth={2.4} strokeMiterlimit={10} strokeLinecap='square' />
  </svg>
);

const Memo = memo(ProfileIcon);
export { Memo as ProfileIcon };
