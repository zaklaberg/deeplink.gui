import { SVGAttributes } from 'react';

const SvgPaintBrushLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 5v3h14V5H5zM4 3h16a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm2 9h6a1 1 0 011 1v3h1v6h-4v-6h1v-2H5a1 1 0 01-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 11-3.536 0z" />
  </svg>
);

export default SvgPaintBrushLine;
