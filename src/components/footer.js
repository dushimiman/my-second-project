import React from "react";
import "./footer.css";
import logo1 from "../Assets/logo1.jpg";
import download from "../Assets/download.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="cols">
        <img
          src={logo1}
          style={{
            width: "80%",
            height: "40px",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        />

        <h1 style={{ paddingTop: "2px" }}>Follow Us On</h1>
        <a href="https://www.youtube.com/" target="_blank">
          <FontAwesomeIcon
            icon={faYoutube}
            pull="left"
            spin
            size="2x"
            fixedWidth
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon
            icon={faFacebook}
            pull="left"
            spin
            size="2x"
            fixedWidth
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            pull="left"
            spin
            size="2x"
            fixedWidth
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.telegram.com/" target="_blank">
          <FontAwesomeIcon
            icon={faTelegram}
            pull="left"
            spin
            size="2x"
            fixedWidth
          ></FontAwesomeIcon>
        </a>
        <a href="https://twitter.com/" target="_blank">
          {" "}
          <FontAwesomeIcon
            icon={faTwitter}
            pull="left"
            spin
            size="2x"
            fixedWidth
          ></FontAwesomeIcon>
        </a>
      </div>
      <div className="cols">
        <h1>Our Services</h1>
        <p>
          
            Tours<br/>
            Hotels
            GuestHouses
            
         
        </p>
        <div className="footers">
        <p>&copy;DianeRwibutso</p>
      </div>
      </div>
      <div className="cols">
        <h1>Contact Us</h1>
        <p>Mail: info@beautifulrwandatours.com</p>
        <p>Call:(+250) 788558132</p>
      </div>
      <div className="cols">
        <h1>RESERVATION </h1>
        <p>teL:+250780564438
           Reservation@beautifulrwandatours       
        </p>
      </div>
    </div>
   
  );
};
export default Footer;
