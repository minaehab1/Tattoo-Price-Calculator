import { memo, SVGProps } from 'react';

const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.28114 13.3794L13.3794 9.28114C13.4856 9.17501 13.5698 9.049 13.6273 8.91032C13.6848 8.77163 13.7143 8.62298 13.7143 8.47286C13.7143 8.32274 13.6848 8.17409 13.6273 8.0354C13.5698 7.89671 13.4856 7.7707 13.3794 7.66457L8 2.28571L2.28571 2.28571L2.28571 8L7.66457 13.38C7.77074 13.4861 7.89678 13.5703 8.03549 13.6277C8.17419 13.6851 8.32285 13.7147 8.47298 13.7146C8.6231 13.7146 8.77174 13.6849 8.9104 13.6274C9.04907 13.5699 9.17505 13.4856 9.28114 13.3794Z'
      stroke='#171A1F'
      strokeWidth={1.37143}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M5.71429 6.85714C6.34547 6.85714 6.85714 6.34547 6.85714 5.71429C6.85714 5.0831 6.34547 4.57143 5.71429 4.57143C5.0831 4.57143 4.57143 5.0831 4.57143 5.71429C4.57143 6.34547 5.0831 6.85714 5.71429 6.85714Z'
      stroke='#171A1F'
      strokeWidth={1.37143}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);

const Memo = memo(TagIcon);
export { Memo as TagIcon };
