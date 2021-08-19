import React, { useState } from "react";
import "./FirstToKnow.styles.css";

import Envelope from "../../assets/envelope.svg";
import Button from "../Button/Button.component.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectEmail } from "../../redux/reducers/user.reducer";
import { changeEmailHandler, registerEmail } from "../../redux/actions";

import Loader from "react-loader-spinner";

const FirstToKnow = () => {
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

  return (
    <section className="firstToKnow">
      <div className="firstToKnow__container">
        <div className="firstToKnow__bg"></div>
        <div className="firstToKnow__left">
          <img
            src={Envelope}
            alt="first to know envelope"
            className="firstToKnow__leftImage"
          />
        </div>
        <div className="firstToKnow__right">
          <h1 className="firstToKnow__title">
            Be one of the first to know when we launch!
          </h1>
          <form onSubmit={submitHandler} className="firstToKnow__form">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="firstToKnow__input"
              value={email}
              onChange={changeHandler}
            />
            <Button
              type="submit"
              className="firstToKnow__button"
              loading={loading}
            >
              {loading ? (
                <Loader type="ThreeDots" color="#fff" height={10} width={50} />
              ) : (
                "Get Early Access"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FirstToKnow;
