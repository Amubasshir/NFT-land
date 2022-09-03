import React from 'react';
import Slider from 'react-slick/lib/Slider';
import Button from '../../common/Button/Button';
import { TRENDING_NFTS } from '../../data/trendingNfts';
import TrendingCard from './TrendingCard/TrendingCard';
import './trendingNfts.css';
const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 300,
  arrows: false,
};

const TrendingNfts = () => {
  return (
    <div className="trending-nfts">
      <div className="tn-title absolute-center">
        <span className="heading-gradient">Trending Nfts</span>
      </div>
      <div className="tn-bg-blob"></div>
      <Slider {...settings}>
        {TRENDING_NFTS.map((_nft) => (
          <TrendingCard nft={_nft} />
        ))}
      </Slider>
      <div className="tn-btn absolute-center">
        <Button
          btnText="SEE MORE"
          type="Secondary"
          customClass="seemore-btn"
        ></Button>
      </div>
    </div>
  );
};

export default TrendingNfts;
