import React from "react";
import { Container, Row, Col, Jumbotron, Button, Image} from "react-bootstrap";
import '../../App.css';
import ChartsPage from '../dashboards/bar';
import Header from "../Header";
import LinePage from '../dashboards/line';
import SpiderPage from '../dashboards/spider';
import logo from '../../images/Money_home.png';


const Home = () => {
  return (
    <>
    <Header />
      <Row>
        <Col className="add-space" md lg xl sm ="2" >
        <Image src={logo} rounded />
        </Col>
        <Col className="add-space" sm md lg xl="10">
          <Jumbotron>
            <h1><b>LORAK&NICRAM</b></h1>
            <p>
              Every company has different goals in mind that they are trying to reach. For example, a business is focusing on increasing its ROI, while another is focusing on specific customers and a government organization is looking to accomplish its goals with a small budget. And, to reach such goals, organizations need a particular strategy to pursue.

              Businesses must implement an application strategy to ensure that they are on the right track to meet the company’s needs and support their goals. Modern software applications can help companies perform their business operations efficiently and achieve pre-defined results. And to do this effectively, companies must coordinate and develop strategies for working together.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}><ChartsPage class="bar"/></Col>
          <Col sm={12} md={6} lg={6}><LinePage /></Col>
        </Row>
      </Container>
      <Container >
        <Row>
          <Col sm md lg xl="12"><SpiderPage /></Col>
        </Row>
      </Container>
    </>
  );

}

export default Home
