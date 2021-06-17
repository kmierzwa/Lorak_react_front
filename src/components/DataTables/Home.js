import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ModalButton from "../ModalButton";
import axios from "axios";
import configData from "../../config.json";
import logo from '../../images/Money_home.png';


const Home = ({ users }) => {
  const [isInputsDisplay, setInputDisplay] = useState(false);

  //hooki - poczytac
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

 
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Every company has different goals in mind that they are trying to reach. For example, a business is focusing on increasing its ROI, while another is focusing on specific customers and a government organization is looking to accomplish its goals with a small budget. And, to reach such goals, organizations need a particular strategy to pursue.

Businesses must implement an application strategy to ensure that they are on the right track to meet the company’s needs and support their goals. Modern software applications can help companies perform their business operations efficiently and achieve pre-defined results. And to do this effectively, companies must coordinate and develop strategies for working together.</h2>
      </div>
      <p className="App-intro">
        
      </p>
    </div>
  );
}
 

export default Home;
