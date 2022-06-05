import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/NavBar';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

import Review from '../Review/Review';

const Home = () => {
   
	
    return (
        
        <div>
      
            <Navbar/>
            <Container>
            <Banner/>
            <Courses/>
            <Review/>
            </Container>
           
            <Footer/>


        </div>
    );
};

export default Home;