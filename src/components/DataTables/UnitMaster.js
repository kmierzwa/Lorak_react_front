import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import RunProcessButton from "../RunProcessButton";
import axios from "axios";
import configData from "../../config.json";
import Header from "../Header";



const GeUnitMaster = () => {
  const [masterunit, setmasterunit] = useState();

  useEffect(async () => {
    //dobrze byloby obsłuzyć błąd serwera - i napisać coś userowi - dałem loading - ale tak naprawde powinny być 3 stany: ok, loading, błąd
    const result = await axios(configData.SERVER_URL + '/showmasterunit');
    setmasterunit(result.data);
  }, masterunit);

  return (
    <>
      <Header />
      <Container>
        <Row className="add-space">
          <Col><RunProcessButton onSubmit={setmasterunit} />
           </Col>
        </Row>
      </Container>
      <Container>
        <Row className="add-space">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Unit Code</th>
                  <th>Unit Name</th>
                  <th>Unit Description</th>
                  <th>IncrPct</th>
                </tr>
              </thead>
              <tbody>
                {masterunit ? (
                  masterunit.map((m_unit) => (
                    <tr>
                      <td>
                        <DropdownButton id="dropdown-basic-button" title={m_unit.UnitCode}>
                          <Dropdown.Item href="#/action-1">France</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Germany</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Poland</Dropdown.Item>
                        </DropdownButton></td>
                      <td>{m_unit.UnitName}</td>
                      <td>{m_unit.UnitDescription}</td>
                      <td>{m_unit.IncrPct}</td>

                    </tr>
                  ))
                ) : (
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GeUnitMaster;
