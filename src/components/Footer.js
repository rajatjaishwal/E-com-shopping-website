import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer_section">
      <div className="container footer_container">
        <div className="row footer_padding">
          {/* Contact Section */}
          <div className="col-md-4">
            <p className="contact_us">Contact Us</p>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Call"
                className="icon"
                
              />
              &nbsp;
              <a href="tel:+918960106544" className="number">
                +91 8960106544
              </a>
            </p>
            <p className="gmail">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Mail"
                className="icon"
              />
              &nbsp;
              <a href="mailto:jaissrajat123@gmail.com" className="email">
                E-shopping@gmail.com
              </a>
            </p>
            <p className="support">
              <strong>Customer Support available</strong> <br />
              from 10am - 7pm
            </p>
            <p className="find_us">Find Us Here</p>
            <ul className="find_us_ul">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://ikp.edgekit.net/y8s2vhk66ef/image_2_Bi5cqcyBFNT.png"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://ikp.edgekit.net/y8s2vhk66ef/image_3_yByOZld4XFh.png"
                    alt="Twitter"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://ikp.edgekit.net/y8s2vhk66ef/image_6_zHp_XCLcq9Z.png"
                    alt="LinkedIn"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://ikp.edgekit.net/y8s2vhk66ef/image_5_3EElSEX6sCW.png"
                    alt="Facebook"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Helper Action (Fixed button for WhatsApp/Call) */}
        <div className="helper-action active">
          <ul>
            <li>
              <a href="tel:+918960106544">
                < img
                  src="https://ikp.edgekit.net/h1rxzpffx/scrapuncle/assets/telephone-call_0Etr04ShlH.png"
                  alt="Call"
                  style={{
                    background: "#fff",
                    borderRadius: "50%",
                  }}
                />
              </a>
            </li>
            <li>
              <a href="https://wa.me/918960106544">
                <img
                  src="https://ikp.edgekit.net/h1rxzpffx/scrapuncle/assets/whatsapp_VhssjIqsN5.png"
                  alt="WhatsApp"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
