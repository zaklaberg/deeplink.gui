import { SVGAttributes } from 'react';

const SvgPulseLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 7.539l6 14L18.659 13H23v-2h-5.659L15 16.461l-6-14L5.341 11H1v2h5.659z" />
  </svg>
);

export default SvgPulseLine;
