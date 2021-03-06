import { SVGAttributes } from 'react';

const SvgBookOpenFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 21h-8V6a3 3 0 013-3h5a1 1 0 011 1v16a1 1 0 01-1 1zm-10 0H3a1 1 0 01-1-1V4a1 1 0 011-1h5a3 3 0 013 3v15zm0 0h2v2h-2v-2z" />
  </svg>
);

export default SvgBookOpenFill;
