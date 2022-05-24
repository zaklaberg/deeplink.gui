import { SVGAttributes } from 'react';

const SvgFilterFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4z" />
  </svg>
);

export default SvgFilterFill;