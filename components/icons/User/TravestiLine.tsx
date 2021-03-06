import { SVGAttributes } from 'react';

const SvgTravestiLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8.95 8.537A7.5 7.5 0 117.537 9.95L4.662 7.075 2.186 9.55.772 8.136l6.364-6.364L8.55 3.186 6.075 5.661l2.876 2.876zM13.5 20a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" />
  </svg>
);

export default SvgTravestiLine;
