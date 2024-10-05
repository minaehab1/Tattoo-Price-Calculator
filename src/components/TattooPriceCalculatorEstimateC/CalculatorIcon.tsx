import { memo, SVGProps } from 'react';

const CalculatorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.9714 2.57143L4.68571 2.57143L4.68571 21.4286L20.9714 21.4286L20.9714 2.57143Z'
      stroke='#607AFB'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M17.5429 6.85714L8.11428 6.85714V10.2857L17.5429 10.2857V6.85714Z'
      stroke='#607AFB'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M8.11428 13.7143H8.97143'
      stroke='#607AFB'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M12.4 13.7143H13.2571'
      stroke='#607AFB'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M8.11428 17.1429H8.97143'
      stroke='#607AFB'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M12.4 17.1429H13.2571'
      stroke='#607AFB'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M16.6857 13.7143H17.5429'
      stroke='#607AFB'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path
      d='M16.6857 17.1429H17.5429'
      stroke='#607AFB'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);

const Memo = memo(CalculatorIcon);
export { Memo as CalculatorIcon };
