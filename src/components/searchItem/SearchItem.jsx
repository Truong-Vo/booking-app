import './searchItem.css';

import React from 'react';

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/293030706.jpg?k=d465d2b1e06e722dd3ac6ef6e6a5d0e03f94834e0f0d4145735a1d73c278371a&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Căn hộ Melody Vũng TàuOpens in new window</h1>
        <span className="siDistance">1.2 km from center</span>
        <span className="siTaxiOp">Includes taxes and fees</span>
        <span className="siSubtitle">Includes taxes and fees</span>
        <span className="siFeatures">
          Entire apartment • 1 bedroom • 1 living room • 1 bathroom • 1 kitchen • 59m² 2 beds (1 queen, 1 futon)
        </span>
        <span className="siCancelOp">FREE cancellation • No prepayment needed</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
