import React, { useEffect, useState } from "react";
import "./Success.styles.css";

import axios from "axios";
import { Link, Redirect, useParams } from "react-router-dom";
import { SET_ERROR_MESSAGE } from "../redux/reducers/message.reducer";
import { useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import Image from "../assets/success.png";
import Logo from "../assets/Zocket-logo.svg";

const Success = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const res = await axios.get(`/api/v1/user/get-details/${id}`);
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      if (err.response) dispatch(SET_ERROR_MESSAGE(err.response.data.message));
      if (err) dispatch(SET_ERROR_MESSAGE(err.message));
      setLoading(false);
    }
  };

  useEffect(() => fetchUser(), []);

  if (loading) {
    return (
      <div className="loading__container">
        <Loader type="Rings" color="#000" height={80} width={80} />
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="success">
      <Link to="/">
        <img src={Logo} alt="zocket logo" />
      </Link>
      <div className="success__container">
        <div>
          <img src={Image} alt="success" width={100} height={100} />
        </div>
        <h1 className="success__title">Congrats, {user.email}</h1>
        <p className="success__subtitle">
          We will update you about our services through your email. Stay upto
          date with it.
        </p>
      </div>
      <p></p>
    </div>
  );
};

export default Success;
