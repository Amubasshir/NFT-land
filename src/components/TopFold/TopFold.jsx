import React from 'react';
import Button from '../../common/Button/Button';
import './topFold.css';

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          <span className="heading-gradient">D</span>iscover Create{' '}
          <span className="heading-gradient">C</span>ollect & Sell <br />{' '}
          <span>
            <span className="heading-gradient">E</span>xtraordinary
          </span>{' '}
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
            <div className="tf-infoItem-count"></div>
            <div className="tf-infoItem-label"></div>
          </div>
          <div className="tf-is-infoItems absolute-center">
            <div className="tf-infoItem-count"></div>
            <div className="tf-infoItem-label"></div>
          </div>
          <div className="tf-is-infoItems absolute-center">
            <div className="tf-infoItem-count"></div>
            <div className="tf-infoItem-label"></div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-r-bg-blob"></div>
        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              src="https://lh3.googleusercontent.com/pa9MKeoPbY8OOIfcm6EVj1hhSdK--UD7YUts_34FXSjPzy912WIfsbIocQzUXTu9tdMaUXIWDbO98gbVEvZ-AX1plvdcReRnXHSqhQ=h400"
              alt="diamond-banner"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              src="https://openseauserdata.com/files/543630193cf32ac09c0356e767d2891e.gif"
              alt="diamond-banner"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              src="https://openseauserdata.com/files/89e468471b05a0d3f49b0b14def8879a.gif"
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
