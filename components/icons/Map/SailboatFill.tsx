import { SVGAttributes } from 'react';

const SvgSailboatFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 18h18a.5.5 0 01.4.8l-2.1 2.8a1 1 0 01-.8.4h-13a1 1 0 01-.8-.4l-2.1-2.8A.5.5 0 013 18zM15 2.425V15a1 1 0 01-1 1H4.04a.5.5 0 01-.39-.812L14.11 2.113a.5.5 0 01.89.312z" />
  </svg>
);

export default SvgSailboatFill;
