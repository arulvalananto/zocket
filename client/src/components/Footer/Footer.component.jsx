import React, { useState } from "react";
import "./Footer.styles.css";

import Logo from "../../assets/Zocket-logo.svg";

import { RiInstagramLine, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { selectEmail } from "../../redux/reducers/user.reducer";
import { changeEmailHandler, registerEmail } from "../../redux/actions";

import { useHistory } from "react-router-dom";

const companyPages = [
  "About us",
  "Blog",
  "Contact us",
  "Pricing",
  "Testimonials",
];

const supportPages = [
  "Help center",
  "Terms of service",
  "Legal",
  "Privacy policy",
  "Status",
];

const url = "https://zocket.com/?utm_source=cutshort&utm_medium=company_page";

const Footer = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const toggleLoading = (val) => setLoading(val);

  const changeHandler = (e) => {
    dispatch(changeEmailHandler(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerEmail(email, history, toggleLoading));
  };
  const renderPagesList = (data) => {
    return data.map((el, index) => (
      <a href={`/${el}`} key={index} className="footer__pageLink">
        <p className="footer__pageLinkText">{el}</p>
      </a>
    ));
  };

  return (
    <footer className="footer">
      <div className="footer__left">
        <img src={Logo} alt="zocket logo" className="footer__logo" />
        <div className="footer__copyright">
          <p>Copyright &copy; 2021 Zocket.</p>
          <p>All rights reserved</p>
        </div>
        <div className="footer__socialMediaLinks">
          <a
            href={url}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramLine size={32} className="footer__socialMediaIcon" />
          </a>
          <a
            href={url}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterFill size={32} className="footer__socialMediaIcon" />
          </a>
          <a
            href={url}
            aria-label="Youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiYoutubeFill size={32} className="footer__socialMediaIcon" />
          </a>
        </div>
      </div>
      <div className="footer__right">
        <section className="footer__pages">
          <h1 className="footer__pagesTitle">Company</h1>
          {renderPagesList(companyPages)}
        </section>
        <section className="footer__pages">
          <h1 className="footer__pagesTitle">Support</h1>
          {renderPagesList(supportPages)}
        </section>
        <form className="footer__form" onSubmit={submitHandler}>
          <h1 className="footer__formTitle">Get Early Access</h1>
          <input
            type="email"
            placeholder="Your email address"
            required
            className="footer__formInput"
            value={email}
            onChange={changeHandler}
          />
          <button
            type="submit"
            className="footer__formButton"
            disabled={loading}
            aria-label="search"
          >
            <FiSend />
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
