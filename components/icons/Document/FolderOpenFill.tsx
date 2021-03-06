import { SVGAttributes } from 'react';

const SvgFolderOpenFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 21a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H20a1 1 0 011 1v3H4v9.996L6 11h16.5l-2.31 9.243a1 1 0 01-.97.757H3z" />
  </svg>
);

export default SvgFolderOpenFill;
