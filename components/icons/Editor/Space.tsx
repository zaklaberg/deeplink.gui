import { SVGAttributes } from 'react';

const SvgSpace = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 9v4h16V9h2v5a1 1 0 01-1 1H3a1 1 0 01-1-1V9h2z" />
  </svg>
);

export default SvgSpace;
