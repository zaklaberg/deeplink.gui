import { SVGAttributes } from 'react';

const SvgServerFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 3h16a1 1 0 011 1v7H3V4a1 1 0 011-1zM3 13h18v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7zm4 3v2h3v-2H7zM7 6v2h3V6H7z" />
  </svg>
);

export default SvgServerFill;
