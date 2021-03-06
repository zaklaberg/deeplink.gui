import { SVGAttributes } from 'react';

const SvgDeleteRow = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 5a1 1 0 011 1v6a1 1 0 01-1 1 5 5 0 11-8 0H4a1 1 0 01-1-1V6a1 1 0 011-1h16zm-7 10v2h6v-2h-6zm6-8H5v4h14V7z" />
  </svg>
);

export default SvgDeleteRow;
