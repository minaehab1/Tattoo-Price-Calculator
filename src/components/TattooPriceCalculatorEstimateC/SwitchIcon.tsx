import { memo, SVGProps } from 'react';

const SwitchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 50 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={50} height={24} rx={12} fill='#607AFB' />
    <circle cx={38} cy={12} r={10.1} fill='white' />
  </svg>
);

const Memo = memo(SwitchIcon);
export { Memo as SwitchIcon };
