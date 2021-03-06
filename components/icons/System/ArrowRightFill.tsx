import { SVGAttributes } from 'react';

const SvgArrowRightFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 13H4v-2h8V4l8 8-8 8z" />
  </svg>
);

export default SvgArrowRightFill;
