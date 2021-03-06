import { SVGAttributes } from 'react';

const SvgStopMiniLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 8v8h8V8H8zM6 7a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V7z" />
  </svg>
);

export default SvgStopMiniLine;
