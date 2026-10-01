import React from "react";
import "../css/Footer.css"

const Footer = () => {
  return(
    <div className="row Footer">
      <div className="col-4 footer-col">
        <b>CORPORATE OFFICE</b>
        <div>1385 Pridemore Court</div>
        <div> Lexington, Kentucky 40505</div>
      </div>
      <div className="col-4 footer-col">
        <b>NATIONWIDE</b>
        <div>Lexington, Kentucky</div>
        <div>Delray Beach, Florida</div>
        <div>Baltimore, Maryland</div>
      </div>
      <div className="col-4">
        <a href="https://www.facebook.com/lundyscatering">
          <img
            className="social"
            src="/logos/facebook.png"
            alt={"facebook"}
          />
        </a>
        <a href="https://www.twitter.com/lundyscatering">
          <img
            className="social"
            src="/logos/twitter.png"
            alt={"twitter"}
          />
        </a>
        <a href="https://www.pinterest.com/lundyscatering">
          <img
            className="social"
            src="/logos/pinterest.png"
            alt={"pinterest"}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
