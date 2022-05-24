import { SVGAttributes } from 'react';

const SvgNodeTree = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 2a1 1 0 011 1v4a1 1 0 01-1 1H8v2h5V9a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1v-1H8v6h5v-1a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1v-1H7a1 1 0 01-1-1V8H4a1 1 0 01-1-1V3a1 1 0 011-1h6zm9 16h-4v2h4v-2zm0-8h-4v2h4v-2zM9 4H5v2h4V4z" />
  </svg>
);

export default SvgNodeTree;