import { SVGAttributes } from 'react';

const SvgLayoutTopLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM4 10v9h16v-9H4zm0-2h16V5H4v3z" />
  </svg>
);

export default SvgLayoutTopLine;
