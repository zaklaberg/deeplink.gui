import { SVGAttributes } from 'react';

const SvgSkipBackFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 11.333l10.223-6.815a.5.5 0 01.777.416v14.132a.5.5 0 01-.777.416L8 12.667V19a1 1 0 01-2 0V5a1 1 0 112 0v6.333z" />
  </svg>
);

export default SvgSkipBackFill;
