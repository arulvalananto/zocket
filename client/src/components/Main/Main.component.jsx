import React, { Fragment, useRef, useState } from "react";
import "./Main.styles.css";

import Button from "../Button/Button.component";

import Logo from "../../assets/Zocket-logo.svg";
import Image from "../../assets/showcase_image.svg";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeEmailHandler, registerEmail } from "../../redux/actions";
import { selectEmail } from "../../redux/reducers/user.reducer";

import Loader from "react-loader-spinner";

const navOptions = ["services", "why us", "about", "pricing", "contact"];

const Main = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const ref = useRef();

  const toggleLoading = (val) => setLoading(val);

  const changeHandler = (e) => dispatch(changeEmailHandler(e.target.value));

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerEmail(email, history, toggleLoading));
  };

  const clickHandler = () => {
    console.log("clicked");
    console.log(ref);
    ref.current.focus();
  };

  return (
    <Fragment>
      <header className="header">
        <div className="header__left">
          <img src={Logo} alt="zocket logo" className="header__logo" />
        </div>

        <nav className="header__right">
          {navOptions.map((option) => (
            <p key={option} className="header__navOption">
              {option}
            </p>
          ))}
          <Button type="button" className="header__button" click={clickHandler}>
            Get Early Access
          </Button>
        </nav>
      </header>
      <main className="main">
        <div className="main__left">
          <h1 className="main__title">facebook ads in 30 seconds</h1>
          <p className="main__subtitle">
            Create stunning ad copy incredibly fast and skyrocket your digital
            business.
          </p>
          <form onSubmit={submitHandler} className="main__form">
            <input
              type="email"
              className="main__input"
              required
              placeholder="Your email address"
              value={email}
              onChange={changeHandler}
              ref={ref}
            />
            <Button type="submit" className="main__button" loading={loading}>
              {loading ? (
                <Loader type="ThreeDots" color="#fff" height={10} width={50} />
              ) : (
                "Get Early Access"
              )}
            </Button>
          </form>
        </div>
        <div className="main__right">
          <img
            src={Image}
            alt="zocket main illustration"
            className="main__rightImage"
          />
        </div>
      </main>
    </Fragment>
  );
};

export default Main;
