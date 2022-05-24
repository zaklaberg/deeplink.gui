import { SVGAttributes } from 'react';

const SvgStarSmileFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 .5l4.226 6.183 7.187 2.109-4.575 5.93.215 7.486L12 19.69l-7.053 2.518.215-7.486-4.575-5.93 7.187-2.109L12 .5zM10 12H8a4 4 0 007.995.2L16 12h-2a2 2 0 01-3.995.15L10 12z" />
  </svg>
);

export default SvgStarSmileFill;