import { SVGAttributes } from 'react';

const SvgFocus3Line = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 1l.001 3.062A8.004 8.004 0 0119.938 11H23v2l-3.062.001a8.004 8.004 0 01-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 01-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0111 4.062V1h2zm-1 5a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 110 4 2 2 0 010-4z" />
  </svg>
);

export default SvgFocus3Line;
