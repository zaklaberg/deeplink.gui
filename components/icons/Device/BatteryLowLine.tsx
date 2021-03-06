import { SVGAttributes } from 'react';

const SvgBatteryLowLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 7v10h14V7H4zM3 5h16a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm2 3h4v8H5V8zm16 1h2v6h-2V9z" />
  </svg>
);

export default SvgBatteryLowLine;
