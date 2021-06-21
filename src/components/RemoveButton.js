import React, { useState } from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import configData from "../config.json";

//https://react-bootstrap.github.io/components/modal/
//https://react-bootstrap.github.io/components/forms/
// dok formularza - macie tez tu przyklady fajnej walidacji np

//w zaleznosci od tego jaka architekture przyjmiecie - ten przycisk moze byc uniwersalny, lub musicie do kazdej tabeli zrobic nowy
// Tak z doswiadczenia moge powiedziec ze juniorzy zawsze chca pisac wszystko jak najbardziej uniwersalnie (bo DRY) a potem czesto sa problemy przez to
// jezeli bedziecie chceli uniwersalnie to pewnie musicie w propsach jakies rzeczy przygotowac - np tablice inputów i po niej mapować, adrest posta etc.
// albo do kazdej tabeli przygotować oddzielny modal - wtedy jakoś to sensownie podzielcie w katalogi.

const RemoveButton = ({ onSubmit }) => {
  // const [del, setdel] = useState("");
  // const [id, setid] = useState("");

  var del = '2'
  var id = '2'

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${configData.SERVER_URL}removeuser`, {
        del,
        id,
      })
      .catch(() =>
        console.log(
          "warto obsłużyć w jakiś sposób błąd - najlepiej byłoby coś wyswietlić userowi xD"
        )
      );

    onSubmit();
  };

  return (
    <>
      <Button variant="danger" onClick={handleSubmit}>
        Delete user
      </Button>
    </>
  );
};

export default RemoveButton;
