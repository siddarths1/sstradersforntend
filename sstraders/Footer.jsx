import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{background:"white"}}>
      <Container>
        <Row>
          <Col lg={4} className="text-center text-lg-start py-3">
            <h5 className="text-uppercase">SS Traders</h5>
            <p className="mb-0">123 Main St</p>
            <p className="mb-0">Anytown, USA 12345</p>
            <p className="mb-0">Phone: (123) 456-7890</p>
            <p className="mb-0">Email: info@sstraders.com</p>
          </Col>
          <Col lg={4} className="text-center py-3 mx-auto block" >
            <h5 className="text-uppercase">Our Services</h5>
            <table width={"100%"} border={2}>
                <tr>
                    <td><a href="/Oils_ghee">Ghee & Oils</a></td>
                    <td><a href="/Masalas_spices">Masala & Spices</a></td>
                </tr>
                <tr>
                    <td><a href="/Pulses_Dalls">Dalls & Pulses</a></td>
                    <td><a href="/DryFruit">Dry Fruits</a></td>
                </tr>
                <tr>
                    <td><a href="/Rice_Atta">Rice & Atta</a></td>
                    <td><a href="/Bevarages">Bevarages</a></td>
                </tr>
                <tr>
                    <td><a href="/Home_Essentials">Home Essentials</a></td>
                    <td><a href="/Kitchen_Essentials">Kitchen Essentials</a></td>
                </tr>
                <tr>
                &nbsp;&nbsp;<td><a href="/Food_Noodles">Food Additives & Noodles</a></td>
                </tr>
            </table>
            {/* <ul className="list-unstyled">
              <li><a href="#">Product 1</a></li>
              <li><a href="#">Product 2</a></li>
              <li><a href="#">Product 3</a></li>
              <li><a href="#">Product 4</a></li>
            </ul> */}
          </Col>
          <Col lg={4} className="text-center text-lg-end py-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#"><i className="bi bi-instagram"></i></a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p className="mb-0">&copy; 2023 SS Traders. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
