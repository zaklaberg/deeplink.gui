import { SVGAttributes } from 'react';

const SvgDoorLockLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7.208a2.5 2.5 0 112 0V16h-2v-3.208z" />
  </svg>
);

export default SvgDoorLockLine;