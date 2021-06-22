import {Button} from "react-bootstrap";
import axios from "axios";
import configData from "../config.json";

const RemoveButton = () => {

  const handleSubmit = (e) => {
    var ids
    console.log('dupa')
    e.preventDefault();
    axios
      .post(`${configData.SERVER_URL}removeuser`, {
        ids,
      })
      .catch((e) =>
        console.log(e)
      );
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
