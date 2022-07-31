import React from "react";
import { Container } from "react-bootstrap";

import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/NavBar";
import Adv from "../Adv/Adv";
import Banner from "../Banner/Banner";

import Courses from "../Courses/Courses";
import Faq from "../Faq/Faq";
import Like from "../Like/Like";
// import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Banner />
        <Adv />
        <Courses />
        <Faq />
        {/* <Review /> */}
        <Like />
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
