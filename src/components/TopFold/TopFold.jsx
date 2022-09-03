import React from 'react';
import Button from '../../common/Button/Button';
import './topFold.css';

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover Collect <br /> & Sell <br /> <span>Extraordinary</span>{' '}
          <span className="heading-gradient">NFT...</span>
        </div>
        <div className="tf-description">
          Enjoy the newest collection of most valuable NFTs.Please make sure
          that you are buying and selling most trending NFTs out there.
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="Explore"></Button>
          <Button
            btnType="SECONDARY"
            btnText="Create"
            customClass="tf-left-secondary-btn"
          ></Button>
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItems absolute-center">
            <div className="tf-infoItem-count">100k+</div>
            <div className="tf-infoItem-label">Collection</div>
          </div>
          <div className="tf-is-infoItems absolute-center">
            <div className="tf-infoItem-count">17k+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItems absolute-center">
            <div className="tf-infoItem-count">470k+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-r-bg-blob"></div>
        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              src="https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif"
              alt="diamond-banner"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              src="https://nftaggregator.io/wp-content/uploads/2022/03/BBC061D3-0858-4058-A251-BDDC233D7A65.gif"
              alt="diamond-banner"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              src="https://c.tenor.com/1i16nMrNj88AAAAC/nft-marketing-nft-gorillas.gif"
              alt="diamond-banner"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              src="https://lh3.googleusercontent.com/JIxWeaU9OG3fUuDrybdT4i1BdfyKbCKGjSrndOLQFPK4xGbc_s-bZp_RgFjRUlTu8NTKak8N6MMSVbhzEwO2rZ1v7xf1d3Nz6Uf7=w287"
              alt="diamond-banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
