import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col } from "react-bootstrap";
import AddButton from "../AddButton";
import RemoveButton from "../RemoveButton";
import Header from "../Header";
import axios from "axios";
import configData from "../../config.json";
import "../../App.css";

const GetUsers = ({ onSubmit }) => {
  const [users, setUsers] = useState();
  const [selectedUsersIds, setSelectedUsersIds] = useState([]);

  useEffect(async () => {
    const result = await axios(configData.SERVER_URL + "/showusers");
    setUsers(result.data);
  }, []);

  const handeleRemoveUsersButton = () => {
    setUsers(() =>{
      users.filter((user) => !selectedUsersIds.includes(user.id_user))
      console.log(selectedUsersIds.length)
      axios
      .post(`${configData.SERVER_URL}/removeuser`, {
        selectedUsersIds,
      }).then(()=> window.location.reload())
      .catch((e) =>
        console.log(e)
      );
    });
  };

  const handleSelectUserCheckbox = (isChecked, userId) => {
    isChecked
      ? setSelectedUsersIds((prev) => [...prev, userId])
      : setSelectedUsersIds(
          selectedUsersIds.filter((selectedUser) => selectedUser !== userId)
        );
  };


  return (
    <>
      <Header />
      <Container>
        <Row className="add-space">
          <Col>
            <AddButton onSubmit={setUsers} />
            <RemoveButton onSubmit={handeleRemoveUsersButton} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="add-space">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users ? (
                  users.map((user) => (
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          id="flexCheckDefault"
                          onChange={(e) =>
                            handleSelectUserCheckbox(
                              e.target.checked,
                              user.id_user
                            )
                          }
                        ></input>
                      </td>
                      <td>{user.id_user}</td>
                      <td>{user.firstname_user}</td>
                      <td>{user.lastname_user}</td>
                      <td>{user.login_user}</td>
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

export default GetUsers;
