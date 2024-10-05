import { memo, SVGProps } from 'react';

const EllipseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={10.995} cy={11} r={11} fill='white' stroke='#607AFB' />
  </svg>
);

const Memo = memo(EllipseIcon);
export { Memo as EllipseIcon };
