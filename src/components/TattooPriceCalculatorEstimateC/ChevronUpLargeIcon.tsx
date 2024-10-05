import { memo, SVGProps } from 'react';

const ChevronUpLargeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.3114 10.272L12.25 9.33333L7 4.08333L1.75 9.33333L2.68864 10.272L7 5.96062L11.3114 10.272Z'
      fill='#171A1F'
    />
  </svg>
);

const Memo = memo(ChevronUpLargeIcon);
export { Memo as ChevronUpLargeIcon };
