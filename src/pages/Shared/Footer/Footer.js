import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footer from '../../../images/footer.png'
import pay from '../../../images/pay.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer pt-3">
        <Container>
            <Row lg={4} sm={1} md={1}>
            <Col className="">
                <img src={footer} style={{width:'120px'}} alt="" />
                <p>Build your career styig with us.</p>
                L-Tech©. ALl rights reseves.
            </Col>
            <Col className="">
                <h3>Courses Catagory</h3>
                <ul className=" mx-auto">
                    <p>Academic</p>
                    <p>Technical</p>
                    <p>Marketing</p>
                    <p>Freelancing</p>
                </ul>
            </Col>
            <Col className="">
                <h3>Payment Gate way</h3>
                <img src={pay} style={{width:'200px'}} alt="" />
            </Col>
            <Col className="">
                <h3>Contact with us</h3>
                <p> Email:b@yahoo.com</p>
                <p> Phone number: 8989-7878-9090</p>
                <div className="font-icon w-25 d-flex justify-content-center mx-auto justify-content-evenly">
                <a href="https://github.com/bipro-b" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/bipro-barai-419381179/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                            <a href="https://www.youtube.com/channel/UChekLTEIdsGpPY3JnC38Udw/featured" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a>
                            <a href="https://web.facebook.com/profile.php?id=100062495514493" target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a>
                        </div>

            </Col>
            </Row>
           

        </Container>

    </div>
    );
};

export default Footer;