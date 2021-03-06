import { SVGAttributes } from 'react';

const SvgReplyFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81A9 9 0 0013 15h-2v5z" />
  </svg>
);

export default SvgReplyFill;
