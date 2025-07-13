import React, { useEffect, useState } from 'react';
import './style.css';
import logo from "../../../../static/planto/logo.png";
import deci from "../../../../static/planto/deci.png";
import deci2 from "../../../../static/planto/deci2.png";
import bag from "../../../../static/planto/bag.svg";
import b1 from "../../../../static/planto/b1.png";
import b2 from "../../../../static/planto/b2.png";
import b3 from "../../../../static/planto/b3.png";
import b4 from "../../../../static/planto/b4.png";
import b5 from "../../../../static/planto/b5.png";
import b6 from "../../../../static/planto/b6.png";
import card_background from "../../../../static/planto/c_background.png";
import right from "../../../../static/planto/right.svg";
import left from "../../../../static/planto/left.svg";
import star from "../../../../static/planto/star.svg";
import half_star from "../../../../static/planto/half_star.svg";
import review_background from "../../../../static/planto/review_background.svg";
import r_background2 from "../../../../static/planto/r_background2.svg";
import g from "../../../../static/planto/g.png";
import g2 from "../../../../static/planto/g2.png";
import g3 from "../../../../static/planto/g3.png";
import r_avatar from "../../../../static/planto/r_avatar.png";
import hcard_bg from "../../../../static/planto/hcard_bg.svg";
import play from "../../../../static/planto/play.svg";
import right_arrow from "../../../../static/planto/right_arrow.svg";
import left_arrow from "../../../../static/planto/left_arrow.svg";
import search from "../../../../static/planto/search.png";
import lines from "../../../../static/planto/lines.svg";

const useDesktopOnly = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Only block very small screens (actual phones/small tablets)
      const isSmallScreen = width < 900 || height < 1024;

      // Check for actual mobile devices in user agent (more specific)
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        'android', 'webos', 'iphone', 'ipod', 
        'blackberry', 'windows phone'
      ];

      const isMobileAgent = mobileKeywords.some(keyword => userAgent.includes(keyword));

      // Only show message for actual mobile devices OR very small screens
      const shouldShowMessage = (isSmallScreen && isMobileAgent) || (width < 1080);
      
      setIsDesktop(!shouldShowMessage);
      setShowMessage(shouldShowMessage);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isDesktop, showMessage };
};

// Desktop Only Message Component
const DesktopOnlyMessage = () => {
  return (
    <div className="plant-website__desktop-only-overlay">
      <div className="plant-website__desktop-only-container">
        <div className="plant-website__desktop-only-icon">
          🖥️
        </div>
        <h2 className="plant-website__desktop-only-title">
          Desktop Experience Required
        </h2>
        <p className="plant-website__desktop-only-description">
          This website is optimized for desktop viewing only. 
          Please visit us on a desktop or laptop computer for the best experience.
        </p>
        <div className="plant-website__desktop-only-features">
          <div className="plant-website__feature-item">
            <span className="plant-website__feature-icon">📱</span>
            <span>Mobile: Not supported</span>
          </div>
          <div className="plant-website__feature-item">
            <span className="plant-website__feature-icon">💻</span>
            <span>Desktop: Recommended</span>
          </div>
          <div className="plant-website__feature-item">
            <span className="plant-website__feature-icon">🎨</span>
            <span>Optimal viewing: 1440px+</span>
          </div>
        </div>
        <button 
          className="plant-website__desktop-only-button"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};


const PlantWebsite1440 = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktop, showMessage } = useDesktopOnly();

  if (showMessage) {
    return <DesktopOnlyMessage />;
  }
  const handleNavClick = (item) => {
    setActiveNav(item);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="plant-website__macbook-pro-1440">
      <div className="plant-website__div-1440">
        <div className="plant-website__overlap-1440">
          <div className="plant-website__rectangle-1440"></div>
          <img className="plant-website__img-1440" src={hcard_bg} alt="Plant decoration" />
          <div className="plant-website__rectangle-2-1440"></div>
          <img className="plant-website__search-interface-1440" src={search} alt="Search" />
          <img className="plant-website__plant-1440" src={logo} alt="Plant logo" />
          <div className="plant-website__text-wrapper-1440">Planto.</div>
          <div className="plant-website__group-1440">
            <div 
              className={`plant-website__text-wrapper-2-1440 ${activeNav === 'Home' ? 'plant-website__active-1440' : ''}`}
              onClick={() => handleNavClick('Home')}
            >
              Home
            </div>
            <div 
              className={`plant-website__text-wrapper-3-1440 ${activeNav === 'More' ? 'plant-website__active-1440' : ''}`}
              onClick={() => handleNavClick('More')}
            >
              More
            </div>
            <div 
              className={`plant-website__text-wrapper-4-1440 ${activeNav === 'Contact' ? 'plant-website__active-1440' : ''}`}
              onClick={() => handleNavClick('Contact')}
            >
              Contact
            </div>
            <div className="plant-website__group-2-1440">
              <div 
                className={`plant-website__text-wrapper-2-1440 ${activeNav === 'Plants Type' ? 'plant-website__active-1440' : ''}`}
                onClick={() => handleNavClick('Plants Type')}
              >
                Plants Type
              </div>
              <img className="plant-website__polygon-1440" src="/api/placeholder/8/4" alt="Dropdown arrow" />
            </div>
          </div>
          <img className="plant-website__bag-1440" src={bag} alt="Shopping bag" />
          <div className="plant-website__group-3-1440" onClick={toggleMenu}>
            <img className="plant-website__line-1440" src={lines} alt="Menu line 1" />
            <img className="plant-website__line-2-1440" src={lines} alt="Menu line 2" />
          </div>
          <div className="plant-website__text-wrapper-5-1440">Breath Natural</div>
          <p className="plant-website__p-1440">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="plant-website__overlap-group-wrapper-1440">
            <div className="plant-website__overlap-group-1440">
              <div className="plant-website__text-wrapper-6-1440">Explore</div>
            </div>
          </div>
          <div className="plant-website__group-4-1440">
            <div className="plant-website__div-wrapper-1440">
              <div className="plant-website__text-wrapper-7-1440">Explore</div>
            </div>
            <div className="plant-website__rectangle-3-1440"></div>
          </div>
          <div className="plant-website__overlap-wrapper-1440">
            <div className="plant-website__overlap-group-1440">
              <div className="plant-website__text-wrapper-8-1440">Buy Now</div>
            </div>
          </div>
          <div className="plant-website__group-5-1440">
            <div className="plant-website__polygon-wrapper-1440">
              <img className="plant-website__polygon-2-1440" src={play} alt="Play button" />
            </div>
            <div className="plant-website__text-wrapper-9-1440">Live Demo...</div>
          </div>
          <img className="plant-website__rose-gold-feminine-1440" src={b2} alt="Featured plant" />
          <div className="plant-website__text-wrapper-10-1440">Calathea plant</div>
          <div className="plant-website__text-wrapper-11-1440">Trendy House Plant</div>
          <div className="plant-website__ellipse-1440"></div>
          <div className="plant-website__ellipse-2-1440"></div>
          <img className="plant-website__right-arrow-1440" src={right_arrow} alt="Right arrow" />
          <img className="plant-website__rectangle-4-1440" src={r_background2} alt="Review background" />
          <div className="plant-website__group-6-1440">
            <img className="plant-website__unsplash-1440" src={r_avatar} alt="Reviewer avatar" />
            <div className="plant-website__group-7-1440">
              <div className="plant-website__text-wrapper-12-1440">alena Patel</div>
              <div className="plant-website__group-8-1440">
                <img className="plant-website__star-1440" src={star} alt="Star 1" />
                <img className="plant-website__star-2-1440" src={star} alt="Star 2" />
                <img className="plant-website__star-3-1440" src={star} alt="Star 3" />
                <img className="plant-website__star-4-1440" src={star} alt="Star 4" />
                <img className="plant-website__star-5-1440" src={half_star} alt="Star 5" />
              </div>
            </div>
          </div>
          <p className="plant-website__text-wrapper-13-1440">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
          </p>
          <div className="plant-website__text-wrapper-14-1440">Our Trendy plants</div>
          <p className="plant-website__text-wrapper-15-1440">For Small Decs Ai Plat</p>
          <p className="plant-website__text-wrapper-16-1440">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua
          </p>
          <div className="plant-website__rectangle-5-1440"></div>
          <img className="plant-website__rose-gold-feminine-2-1440" src={deci} alt="Plant 2" />
          <img className="plant-website__rose-gold-feminine-3-1440" src={deci2} alt="Plant 3" />
          <div className="plant-website__text-wrapper-17-1440">Rs. 599/-</div>
          <img className="plant-website__bag-2-1440" src={bag} alt="Shopping bag" />
          <div className="plant-website__group-9-1440">
            <div className="plant-website__overlap-2-1440">
              <div className="plant-website__group-10-1440">
                <div className="plant-website__div-wrapper-1440">
                  <div className="plant-website__text-wrapper-7-1440">Explore</div>
                </div>
                <div className="plant-website__rectangle-3-1440"></div>
              </div>
              <img className="plant-website__bag-3-1440" src={bag} alt="Shopping bag" />
            </div>
            <p className="plant-website__text-wrapper-18-1440">For Fresh Decs Ai Plat</p>
            <p className="plant-website__text-wrapper-19-1440">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </p>
            <div className="plant-website__text-wrapper-20-1440">Rs. 579/-</div>
          </div>
        </div>

        {/* Top Selling Plants Section */}
        <div className="plant-website__group-11-1440">
          <div className="plant-website__overlap-3-1440">
            <img className="plant-website__rectangle-6-1440" src={card_background} alt="Plant card background" />
            <img className="plant-website__rose-gold-feminine-4-1440" src={b1} alt="Plant image" />
            <div className="plant-website__text-wrapper-21-1440">Calathea plant</div>
            <p className="plant-website__text-wrapper-22-1440">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="plant-website__group-12-1440">
              <div className="plant-website__frame-wrapper-1440">
                <div className="plant-website__frame-1440">
                  <img className="plant-website__bag-4-1440" src={bag} alt="Add to cart" />
                </div>
              </div>
              <div className="plant-website__text-wrapper-23-1440">Rs. 359/-</div>
            </div>
          </div>
        </div>

        <div className="plant-website__overlap-4-1440">
          <img className="plant-website__rectangle-6-1440" src={card_background} alt="Plant card background" />
          <img className="plant-website__rose-gold-feminine-4-1440" src={b2} alt="Plant image" />
          <div className="plant-website__text-wrapper-24-1440">Calathea plant</div>
          <p className="plant-website__text-wrapper-25-1440">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="plant-website__group-12-1440">
            <div className="plant-website__frame-wrapper-1440">
              <div className="plant-website__frame-1440">
                <img className="plant-website__bag-4-1440" src={bag} alt="Add to cart" />
              </div>
            </div>
            <div className="plant-website__text-wrapper-23-1440">Rs. 359/-</div>
          </div>
          <div className="plant-website__group-13-1440">
            <div className="plant-website__overlap-3-1440">
              <img className="plant-website__rectangle-6-1440" src={card_background} alt="Plant card background" />
              <img className="plant-website__rose-gold-feminine-4-1440" src={b3} alt="Plant image" />
              <div className="plant-website__text-wrapper-21-1440">Calathea plant</div>
              <p className="plant-website__text-wrapper-22-1440">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="plant-website__group-12-1440">
                <div className="plant-website__frame-wrapper-1440">
                  <div className="plant-website__frame-1440">
                    <img className="plant-website__bag-4-1440" src={bag} alt="Add to cart" />
                  </div>
                </div>
                <div className="plant-website__text-wrapper-23-1440">Rs. 359/-</div>
              </div>
            </div>
          </div>
        </div>

        <div className="plant-website__group-14-1440">
          <div className="plant-website__overlap-3-1440">
            <img className="plant-website__rectangle-6-1440" src={card_background} alt="Plant card background" />
            <img className="plant-website__rose-gold-feminine-4-1440" src={b4} alt="Plant image" />
            <div className="plant-website__text-wrapper-21-1440">Calathea plant</div>
            <p className="plant-website__text-wrapper-22-1440">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="plant-website__group-12-1440">
              <div className="plant-website__frame-wrapper-1440">
                <div className="plant-website__frame-1440">
                  <img className="plant-website__bag-4-1440" src={bag} alt="Add to cart" />
                </div>
              </div>
              <div className="plant-website__text-wrapper-23-1440">Rs. 359/-</div>
            </div>
          </div>
        </div>

        <div className="plant-website__group-15-1440">
          <div className="plant-website__overlap-5-1440">
            <img className="plant-website__rectangle-6-1440" src={card_background} alt="Plant card background" />
            <img className="plant-website__rose-gold-feminine-5-1440" src={b5} alt="Plant image" />
            <div className="plant-website__text-wrapper-21-1440">Calathea plant</div>
            <p className="plant-website__text-wrapper-22-1440">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="plant-website__group-12-1440">
              <div className="plant-website__frame-wrapper-1440">
                <div className="plant-website__frame-1440">
                  <img className="plant-website__bag-4-1440" src={bag} alt="Add to cart" />
                </div>
              </div>
              <div className="plant-website__text-wrapper-23-1440">Rs. 359/-</div>
            </div>
          </div>
        </div>

        <div className="plant-website__group-16-1440">
          <div className="plant-website__overlap-5-1440">
            <img className="plant-website__rectangle-6-1440" src={card_background} alt="Plant card background" />
            <img className="plant-website__rose-gold-feminine-5-1440" src={b6} alt="Plant image" />
            <div className="plant-website__text-wrapper-21-1440">Calathea plant</div>
            <p className="plant-website__text-wrapper-22-1440">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="plant-website__group-12-1440">
              <div className="plant-website__frame-wrapper-1440">
                <div className="plant-website__frame-1440">
                  <img className="plant-website__bag-4-1440" src={bag} alt="Add to cart" />
                </div>
              </div>
              <div className="plant-website__text-wrapper-23-1440">Rs. 359/-</div>
            </div>
          </div>
        </div>

        <div className="plant-website__group-17-1440">
          <div className="plant-website__overlap-6-1440">
            <div className="plant-website__text-wrapper-26-1440">Our Top Selling</div>
            <img className="plant-website__vector-3-1440" src={right} alt="Decorative element" />
            <img className="plant-website__vector-4-1440" src={left} alt="Decorative element" />
          </div>
        </div>

        {/* Best Collection Section */}
        <div className="plant-website__overlap-7-1440">
          <div className="plant-website__group-18-1440">
            <div className="plant-website__overlap-8-1440">
              <div className="plant-website__group-19-1440">
                <div className="plant-website__overlap-group-2-1440">
                  <div className="plant-website__text-wrapper-27-1440">Our Best o2</div>
                  <img className="plant-website__vector-5-1440" src={right} alt="Decorative element" />
                  <img className="plant-website__vector-6-1440" src={left} alt="Decorative element" />
                </div>
              </div>
              <div className="plant-website__rectangle-7-1440"></div>
              <div className="plant-website__group-20-1440">
                <div className="plant-website__overlap-group-1440">
                  <div className="plant-website__text-wrapper-6-1440">Explore</div>
                </div>
              </div>
              <img className="plant-website__rose-gold-feminine-6-1440" src={b1} alt="Featured collection plant" />
              <p className="plant-website__text-wrapper-28-1440">We Have Small And Best O2 Plants Collection's</p>
              <p className="plant-website__text-wrapper-29-1440">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua
              </p>
              <p className="plant-website__text-wrapper-30-1440">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <img className="plant-website__right-arrow-2-1440" src={right_arrow} alt="Right arrow" />
          <p className="plant-website__element-1440">
            <span className="plant-website__span-1440">01/</span> 
            <span className="plant-website__text-wrapper-31-1440">04</span>
          </p>
          <img className="plant-website__right-arrow-3-1440" src={left_arrow} alt="Right arrow" />
        </div>

        {/* Customer Reviews Section */}
        <div className="plant-website__group-21-1440">
          <div className="plant-website__group-22-1440">
            <div className="plant-website__overlap-group-3-1440">
              <div className="plant-website__text-wrapper-26-1440">Customer Review</div>
              <img className="plant-website__vector-7-1440" src={right} alt="Decorative element" />
              <img className="plant-website__vector-8-1440" src={left} alt="Decorative element" />
            </div>
          </div>
          <div className="plant-website__group-23-1440">
            <div className="plant-website__group-24-1440">
              <div className="plant-website__overlap-group-4-1440">
                <img className="plant-website__rectangle-8-1440" src={review_background} alt="Review background" />
                <img className="plant-website__unsplash-lbcj-jw-1440" src={g2} alt="Reviewer photo" />
                <div className="plant-website__text-wrapper-32-1440">Maxn Raval</div>
                <div className="plant-website__group-25-1440">
                  <img className="plant-website__star-6-1440" src={star} alt="Star 1" />
                  <img className="plant-website__star-7-1440" src={star} alt="Star 2" />
                  <img className="plant-website__star-8-1440" src={star} alt="Star 3" />
                  <img className="plant-website__star-9-1440" src={star} alt="Star 4" />
                  <img className="plant-website__star-10-1440" src={star} alt="Star 5" />
                </div>
                <p className="plant-website__text-wrapper-33-1440">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </div>
            </div>
            <div className="plant-website__group-26-1440">
              <div className="plant-website__overlap-group-4-1440">
                <img className="plant-website__rectangle-8-1440" src={review_background} alt="Review background" />
                <img className="plant-website__unsplash-lbcj-jw-1440" src={g} alt="Reviewer photo" />
                <div className="plant-website__text-wrapper-32-1440">venely k</div>
                <div className="plant-website__group-25-1440">
                <img className="plant-website__star-6-1440" src={star} alt="Star 1" />
                  <img className="plant-website__star-7-1440" src={star} alt="Star 2" />
                  <img className="plant-website__star-8-1440" src={star} alt="Star 3" />
                  <img className="plant-website__star-9-1440" src={star} alt="Star 4" />
                  <img className="plant-website__star-10-1440" src={star} alt="Star 5" />
                </div>
                <p className="plant-website__text-wrapper-33-1440">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </div>
            </div>
            <div className="plant-website__group-27-1440">
              <div className="plant-website__overlap-group-4-1440">
                <img className="plant-website__rectangle-8-1440" src={review_background} alt="Review background" />
                <img className="plant-website__unsplash-lbcj-jw-1440" src={g3} alt="Reviewer photo" />
                <div className="plant-website__text-wrapper-32-1440">Lii thakur</div>
                <div className="plant-website__group-25-1440">
                <img className="plant-website__star-6-1440" src={star} alt="Star 1" />
                  <img className="plant-website__star-7-1440" src={star} alt="Star 2" />
                  <img className="plant-website__star-8-1440" src={star} alt="Star 3" />
                  <img className="plant-website__star-9-1440" src={star} alt="Star 4" />
                  <img className="plant-website__star-10-1440" src={star} alt="Star 5" />
                </div>
                <p className="plant-website__text-wrapper-33-1440">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="plant-website__overlap-9-1440">
          <div className="plant-website__group-28-1440">
            <div className="plant-website__overlap-10-1440">
              <img className="plant-website__plant-2-1440" src={logo} alt="Footer plant logo" />
              <div className="plant-website__text-wrapper-34-1440">Planto.</div>
            </div>
          </div>
          <p className="plant-website__text-wrapper-35-1440">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="plant-website__group-29-1440">
            <div className="plant-website__text-wrapper-36-1440">FB</div>
            <div className="plant-website__text-wrapper-37-1440">TW</div>
            <div className="plant-website__text-wrapper-38-1440">LI</div>
          </div>
          <div className="plant-website__text-wrapper-39-1440">Quick Link's</div>
          <div className="plant-website__text-wrapper-40-1440">For Every Update.</div>
          <div className="plant-website__text-wrapper-41-1440">Home</div>
          <div className="plant-website__text-wrapper-42-1440">Type's Of plant's</div>
          <div className="plant-website__text-wrapper-43-1440">Contact</div>
          <div className="plant-website__text-wrapper-44-1440">Privacy</div>
          <p className="plant-website__text-wrapper-45-1440">planto © all right reserve</p>
          <div className="plant-website__overlap-11-1440">
            <input 
              className="plant-website__text-wrapper-46-1440" 
              placeholder="Enter Email"
              type="email"
            />
            <img className="plant-website__exclude-1440" src="/api/placeholder/138/54" alt="Subscribe button" />
          </div>
        </div>

        <div className="plant-website__group-30-1440">
          <div className="plant-website__rectangle-9-1440"></div>
          <div className="plant-website__ellipse-3-1440"></div>
          <div className="plant-website__ellipse-4-1440"></div>
        </div>
      </div>
    </div>
  );
};

export default PlantWebsite1440;