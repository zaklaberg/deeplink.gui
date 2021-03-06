import { SVGAttributes } from 'react';

const SvgExchangeBoxFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9 6H8v2h9l-5-5v3zm-5 4l5 5v-3h4v-2H7z" />
  </svg>
);

export default SvgExchangeBoxFill;
