import React from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import configData from "../config.json";

const LogoutButton = ({ onSubmit }) => {

  var logout = 'true'

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${configData.SERVER_URL}/logout`, {
        logout
      }).then(() => window.location = '/')
      .catch((e) =>
        window.confirm(e)
      );
  };

  return (
    <>
      <Button variant="danger" onClick={handleSubmit}>
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
