import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col } from "react-bootstrap";
import AddButton from "../AddButton";
import RemoveButton from "../RemoveButton";
import Header from "../Header";
import axios from "axios";
import configData from "../../config.json";
import "../../App.css";

const GetUsers = () => {
  const [users, setUsers] = useState();
  const [selectedUsersIds, setSelectedUsersIds] = useState([]);

  useEffect(async () => {
    debugger;
    const result = await axios(configData.SERVER_URL + "/showusers");
    setUsers(result.data);
    //ta tablica na dole ma zawierac komponenty które jeżeli się zmienią - ten useEffect jest wołany -
    // dla treningu spróbuj teraz usunąć usera - poprostu się usunie, a jak dodasz users do tablicy
    //to sfetchuje się na nowo. teraz macie znowu decyzje architektury  - opcje są takie
    // 1 wysyłasz idiki na backend i tylko usuwasz ze state userów - raczej zły pomysł bo jak coś pójdzie nie tak to na backendzie zostaną userzy - chyba że wyświetlisz bład...
    // 2. backend morze odrazu zwracać wszystkich userów i tylko aktualizujesz state
    // 3. Wymuszasz wywołanie useEffect
    // Kolejną sprawą jest jak to będzie usuwane - czy przygotujesz api na jedno id i wtedy requesty w pętli
    // czy 1 request z tablicą
  }, []);

  const handeleRemoveUsersButton = () => {
    //tutaj aktualizuję state tak tylko żeby wam pokazać, ale docelowo tu ma iść request na backend (checkbox zostaje zaznaczony - nie chce mi się z tym bawić bo docelowo i tak userzy będą fetchowani na nowo chyba)
    setUsers(() =>
      users.filter((user) => !selectedUsersIds.includes(user.id_user))
    );
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
