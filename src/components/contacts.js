import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import AddUserButton from './AddUserButton'

const Contacts = ({ users }) => {

  const [isInputsDisplay, setInputDisplay] = useState(false);

//hooki - poczytac
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Table striped bordered hover responsive="sm">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Password</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{users.map((contact) => (
  <tr>
        <td>{contact.id_user}</td>
        <td>{contact.firstname_user}</td>
        <td>{contact.lastname_user}</td>
        <td>{contact.login_user}</td>
        <td>{contact.password_user}</td>
        <td><a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            class="fas fa-download fa-sm text-white-50"></i> Dawaj HAJS!</a>
                            </td>
                            </tr>
))}
{ 
      isInputsDisplay && 
      <tr>
      <td><input value={firstName} onChange={e => setFirstName(e.target.value)}  /></td>
      <td><input value={lastName} onChange={e => setLastName(e.target.value)}  /></td>
      <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
      <td><a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                          class="fas fa-download fa-sm text-white-50"></i> Dawaj HAJS!</a>
                          </td></tr>
    } 

    </tbody>
{
  isInputsDisplay ?
    <AddUserButton id="tabela" UserFirstName={firstName} lastName={lastName} zdupydomordyparametr="sdsdddsdsdsds">dupa</AddUserButton>:
<button onClick={()=>setInputDisplay(!isInputsDisplay)}>poka dupe </button>
}
  </Table>
  )
};

export default Contacts