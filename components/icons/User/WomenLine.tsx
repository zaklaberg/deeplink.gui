import { SVGAttributes } from 'react';

const SvgWomenLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 15.934A7.501 7.501 0 0112 1a7.5 7.5 0 011 14.934V18h5v2h-5v4h-2v-4H6v-2h5v-2.066zM12 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" />
  </svg>
);

export default SvgWomenLine;
