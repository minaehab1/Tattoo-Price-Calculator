import { memo, SVGProps } from 'react';

const CWarning1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 21.46C17.2246 21.46 21.46 17.2246 21.46 12C21.46 6.77539 17.2246 2.54 12 2.54C6.77539 2.54 2.54 6.77539 2.54 12C2.54 17.2246 6.77539 21.46 12 21.46Z'
      stroke='#C12126'
      strokeWidth={2.064}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <path d='M12 7.71L12 12.87' stroke='#C12126' strokeWidth={2.064} strokeMiterlimit={10} strokeLinecap='square' />
    <path
      d='M12 17.15C12.475 17.15 12.86 16.765 12.86 16.29C12.86 15.815 12.475 15.43 12 15.43C11.525 15.43 11.14 15.815 11.14 16.29C11.14 16.765 11.525 17.15 12 17.15Z'
      fill='#C12126'
    />
  </svg>
);

const Memo = memo(CWarning1Icon);
export { Memo as CWarning1Icon };
