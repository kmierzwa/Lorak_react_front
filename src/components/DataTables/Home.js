import React, { useState, useEffect } from "react";
import {Container,Row,Col, Jumbotron, Button } from "react-bootstrap";
import axios from "axios";
import configData from "../../config.json";
import '../../App.css';
import logo from '../../images/Money_home.png';


const Home = ({ users }) => {
  const [isInputsDisplay, setInputDisplay] = useState(false);

  //hooki - poczytac
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

 
  return (
    <>
      <Row>
      <Col className="add-space" xs lg="2">
      <img src={logo} alt="logo" />
      </Col>
        <Col  className="add-space" xs lg="8">
      <Jumbotron>
  <h1>Hello, world!</h1>
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
    </>
  );
}
 

export default Home;
