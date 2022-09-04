import React from 'react';
import './trendingCard.css';

const TrendingCard = (props) => {
  const { nft } = props;
  return (
    <div className="trending-card absolute-center">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img src={nft.banner} alt={nft.user_name} className="tc-banner" />
          <div className="tc-user-info">
            <div className="tc-ui-left">
              <img
                className="tc-user-logo "
                src={nft.user_photo}
                alt={nft.user_name}
              />
              <div>
                <div className="tc-ui-username">{nft.user_name}</div>
                <div className="tc-ui-userhandle">{nft.userHandle}</div>
              </div>
            </div>
            <img
              className="tc-sonala-logo"
              src="https://openseauserdata.com/files/265128aa51521c90f7905e5a43dcb456_new.svg"
              alt="ETH ON SOLANA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
