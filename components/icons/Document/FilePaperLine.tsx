import { SVGAttributes } from 'react';

const SvgFilePaperLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 17v2a1 1 0 002 0V4H5v11H3V3a1 1 0 011-1h16a1 1 0 011 1v16a3 3 0 01-3 3H4a3 3 0 01-3-3v-2h16z" />
  </svg>
);

export default SvgFilePaperLine;
