import { memo, SVGProps } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.4 3.84857L15.0486 9.21429L20.9714 10.0749L16.6857 14.2526L17.6971 20.1514L12.4 17.3674L7.10286 20.1514L8.11429 14.2526L3.82857 10.0749L9.75143 9.21429L12.4 3.84857Z'
      stroke='#565D6D'
      strokeWidth={2.05714}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);

const Memo = memo(StarIcon);
export { Memo as StarIcon };
