import { SVGAttributes } from 'react';

const SvgRemoteControlFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 12a1 1 0 011 1v9H6v-9a1 1 0 011-1h10zm-7 2H8v2h2v-2zm2-8a6 6 0 015.368 3.316l-1.79.895a4 4 0 00-7.157 0l-1.789-.895A6 6 0 0112 6zm0-4a10 10 0 018.946 5.527l-1.789.895A8 8 0 0012 4a8 8 0 00-7.157 4.422l-1.79-.895A10 10 0 0112 2z" />
  </svg>
);

export default SvgRemoteControlFill;
