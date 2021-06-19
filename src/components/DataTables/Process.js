import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import configData from "../../config.json";

const Process = () => {
  const [process, setProcess] = useState(false);

  useEffect(async () => {
    //dobrze byloby obsłuzyć błąd serwera - i napisać coś userowi - dałem loading - ale tak naprawde powinny być 3 stany: ok, loading, błąd
    const result = await axios(configData.SERVER_URL +'/showprocess');
    setProcess(result.data);
  }, process);

  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>idPayee</th>
          <th>UnitId</th>
          <th>UnitCode</th>
          <th>id_user_PPM</th>
          <th>PayPlanManagerFirstName</th>
          <th>PayPlanManagerLastName</th>
          <th>lastname</th>
          <th>FirstName</th>
          <th>BasePay</th>
          <th>BasePayIncPct</th>
          <th>BasePayIncr</th>
        </tr>
      </thead>
      <tbody>
        {process ?(
          process.map((proc) => (
            <tr>
              <td>{proc.idPayee}</td>
              <td>{proc.UnitId}</td>
              <td>{proc.UnitCode}</td>
              <td>{proc.id_user_PPM}</td>
              <td>{proc.PayPlanManagerFirstName}</td>
              <td>{proc.PayPlanManagerLastName}</td>
              <td>{proc.lastname}</td>
              <td>{proc.FirstName}</td>
              <td>{proc.BasePay}</td>
              <td>{proc.BasePayIncPct}</td>
              <td>{proc.BasePayIncr}</td>       
            </tr>
          ))
          ) : (
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          )}
      </tbody>
    </Table>
  );
};

export default Process;
