import { SVGAttributes } from 'react';

const SvgUserSmileFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 12a5 5 0 0010 0h-2a3 3 0 01-6 0H7z" />
  </svg>
);

export default SvgUserSmileFill;
