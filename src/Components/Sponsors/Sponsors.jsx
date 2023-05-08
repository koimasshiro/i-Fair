import React from "react";
import img1 from "../../images/Tetfund-png-logo.png";
import img2 from "../../images/makelab_logo_OG2-pfwv6ekxchd6k2ddnvumuydn9dpbyqgndbes7ctx30.png";
import img3 from "../../images/nirsal-1-1024x495.webp";
import img4 from "../../images/479549_c79c029db965466691e8db4c95c5e844_mv2.png";
import img5 from "../../images/245611899_4352984364819345_6690974808646780411_n.png";
import img6 from "../../images/rcc.png";
import img7 from "../../images/Asset-1@2x-1.png";
import img8 from "../../images/images-1-removebg-preview-e1683211550607.png";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsors-section">
        <h1>Partners & Sponsors</h1>
        <div className="sponsors">
          <div className="sponsor-img">
            <img src={img1} alt="sponsor-logo" className="sponsor-logo tetfund" />
          </div>
          <div className="sponsor-img">
            <img src={img2} alt="sponsor-logo" className="sponsor-logo" />
          </div>
          <div className="sponsor-img">
            <img src={img3} alt="sponsor-logo" className="sponsor-logo" />
          </div>
          <div className="sponsor-img">
            <img src={img4} alt="sponsor-logo" className="sponsor-logo" />
          </div>
          <div className="sponsor-img">
            <img src={img5} alt="sponsor-logo" className="sponsor-logo" />
          </div>
          <div className="sponsor-img">
            <img src={img6} alt="sponsor-logo" className="sponsor-logo" />
          </div>
        </div>
      </div>
      <div className="partner-initiator">
        <div className="sponsor">
          <h2>Technical Partner</h2>
          <div>
            <img src={img7} alt="sponsor-logo" className="sponsor-logo" />
          </div>
        </div>
        <div className="sponsor">
          <h2>Initiator</h2>
          <div>
            <img src={img8} alt="sponsor-logo" className="sponsor-logo israel-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
