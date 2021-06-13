import React from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const AddUserButton = ({ zdupydomordyparametr, UserFirstName, lastName }) => {
// w lastname nie trzeba robic xx:xx bo paramter jest taki sam jak zmienna
  const sendRequest = () => {
    const result = axios.post('http://localhost:8081/dupa', { firstName:UserFirstName, lastName, login: 'd', pass: 'd'});
  }
  return (
    <Button onClick={()=>sendRequest()}>
    dupa {zdupydomordyparametr}
    </Button>
  )
};

export default AddUserButton