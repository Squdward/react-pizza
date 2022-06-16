import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton: FC<{ key: number }> = ({ key }) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={464}
    viewBox="0 0 280 464"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
    key={key}>
    <rect x="7" y="266" rx="0" ry="0" width="280" height="27" />
    <rect x="80" y="274" rx="0" ry="0" width="0" height="1" />
    <rect x="249" y="278" rx="0" ry="0" width="3" height="2" />
    <rect x="3" y="312" rx="0" ry="0" width="280" height="88" />
    <rect x="5" y="417" rx="0" ry="0" width="136" height="45" />
    <rect x="156" y="416" rx="0" ry="0" width="126" height="45" />
    <rect x="83" y="441" rx="0" ry="0" width="1" height="0" />
    <circle cx="141" cy="124" r="120" />
  </ContentLoader>
);

export default PizzaSkeleton;
