import React from 'react';
import { INFO_ITEMS } from '../../data/infoItems';
import InfoItem from './infoItem/infoItem';

import './infoSection.css';
const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="is-heading absolute-center">
        <span className="heading-gradient">Create and sell your NFTs</span>
      </div>
      <div className="is-items-container">
        {INFO_ITEMS.map((_infoItem) => (
          <InfoItem item={_infoItem} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
