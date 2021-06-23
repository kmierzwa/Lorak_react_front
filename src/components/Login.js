import React, { useState } from "react";
import '../App.css';
import { Row, Container,Form, Col,Button } from "react-bootstrap";
import axios from "axios";
import configData from "../config.json";



const Login = ({ onSubmit }) => {
    const [login, setlogin] = useState("");
    const [pass, setpass] = useState("");

    const auth = async () => {
      try {
        const res = await axios.get(`${configData.SERVER_URL}/authenticate`, { auth: { allow: 'true' } });
        if (res.data === true){
          window.location = '/home'
        }
        else {
          window.confirm("Wrong username or password!")
        }
      } catch (e) {
        console.log(e);
      }
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post(`${configData.SERVER_URL}/login`, {
          login,
          pass,
        }).then(() => auth())
        .catch((e) =>
        window.confirm(e)
        )
    }; 
    return (
        <>
  <Container className="center">
      <Row>
          <Col/>
          <Col md lg xl sm ="auto"> <h2>Welcome in Lorak!</h2>
            <p>Please login to get access.</p></Col>
          <Col/>
      </Row>
    <Row>
      <Col/>
      <Col md lg xl sm ="auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="j.travolta@domain.com" value={login} onChange={(e) => setlogin(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="*******"  value={pass} onChange={(e) => setpass(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" block type="submit">
            Login
          </Button>
          <Button variant="secondary" block type="submit">
            Login with SSO
          </Button>
        </Form>
      </Col>
      <Col/>
    </Row>
  </Container>
  </>
    )};

export default Login;