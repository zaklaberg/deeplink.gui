import { SVGAttributes } from 'react';

const SvgIncreaseDecreaseFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm6 8V9H7v2H5v2h2v2h2v-2h2v-2H9zm4 0v2h6v-2h-6z" />
  </svg>
);

export default SvgIncreaseDecreaseFill;
