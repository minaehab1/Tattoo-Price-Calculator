import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.97143 11.1429L12.4 3.42857L21.8286 11.1429'
      stroke='#565D6D'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
    />
    <path
      d='M10.6857 21.4286L10.6857 16.2857H14.1143L14.1143 21.4286'
      stroke='#565D6D'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
    />
    <path
      d='M5.54286 12.8571L5.54286 19.7143C5.54286 20.6614 6.31 21.4286 7.25714 21.4286L17.5429 21.4286C18.49 21.4286 19.2571 20.6614 19.2571 19.7143V12.8571'
      stroke='#565D6D'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
