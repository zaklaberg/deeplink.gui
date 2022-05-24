import { SVGAttributes } from 'react';

const SvgScissorsCutFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9.879 12L7.562 9.683a4 4 0 112.121-2.121L12 9.88l6.374-6.375a2 2 0 012.829 0l.707.707L9.683 16.438a4 4 0 11-2.121-2.121L9.88 12zM6 8a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4zm9.535-6.587l6.375 6.376-.707.707a2 2 0 01-2.829 0l-4.96-4.961 2.12-2.122zM16 11h2v2h-2v-2zm4 0h2v2h-2v-2zM6 11h2v2H6v-2zm-4 0h2v2H2v-2z" />
  </svg>
);

export default SvgScissorsCutFill;