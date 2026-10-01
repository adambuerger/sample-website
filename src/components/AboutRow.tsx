import React from "react";

const AboutRow = () => {
  return <div className="row">
                <div className="col-4 links">
                    <div className="image-link">
                        <img className="link-image" src="/flowers.png" alt="flowers.png" />
                        <a href="/about">
                            <div className="link-text">
                                <h3>About the food</h3>
                                <u>Our Culinary Team</u>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-4 contact links">
                    <div><h2>CONTEMPORAY & SOPHISTICATED</h2></div>
                    <h4>Creative Catering, Rental, Decor & Production</h4>
                    <p>From intimate to extravagant, traditional to unexpected, Lundy’s Special Events produces extraordinary and memorable events that embody the finest in food, beverage, and service. Founded in 1971 by the Lundergan Family, the company has evolved from startup-style beginnings to a highly successful turn-key operation with a talented team of chefs, bartenders, service staff, and event designers focusing on the spirit of the hospitality industry.</p>
                    <a href="/contact">
                        Contact Us
                    </a>
                </div>
                <div className="col-4 links">
                    <div className="image-link family">
                        <img className="link-image" src="/family-narrow.png" alt="family-narrow.png" />
                        <a href="/about">
                            <div className="link-text">
                                <h3>About Us</h3>
                                <u>Our Story</u>
                            </div>
                        </a>
                    </div>
                </div>
            </div>;
};

export default AboutRow;
