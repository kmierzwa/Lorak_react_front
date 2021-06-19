import React, { useState, useEffect } from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import axios from "axios";
import configData from "../../config.json";
import '../../App.css';
import ChartsPage from '../dashboards/bar';
import LinePage from '../dashboards/line';
import SpiderPage from '../dashboards/spider';
import logo from '../../images/Money_home.png';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


const Home = ({ users }) => {
  const [isInputsDisplay, setInputDisplay] = useState(false);

  //hooki - poczytac
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  return (
    <>
      <Row>
        <Col className="add-space" xs lg="2">
          <img src={logo} alt="logo" class="logo"/>
        </Col>
        <Col className="add-space" xs lg="8">
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
      <Container sm md lg="4">
        <Row>
          <Col><ChartsPage /></Col>
          <Col><LinePage /></Col>
        </Row>
      </Container>
      <Container sm md lg="12">
        <Row>
          <Col><SpiderPage /></Col>
        </Row>
      </Container>
    </>
  );

}



export default Home
