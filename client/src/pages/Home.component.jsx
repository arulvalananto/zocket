import React, { Fragment } from "react";

import Footer from "../components/Footer/Footer.component";
import Main from "../components/Main/Main.component";
import Features from "../components/Features/Features.component";
import Testimonials from "../components/Testimonials/Testimonials.component";
import WhyUs from "../components/WhyUs/WhyUs.component";
import FirstToKnow from "../components/FirstToKnow/FirstToKnow.component";
import AlertBox from "../components/AlertBox/AlertBox.component";

const Home = () => {
  return (
    <Fragment>
      <div className="app__container">
        <AlertBox />
        <Main />
        <Features />
        <WhyUs />
        <Testimonials />
        <FirstToKnow />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
