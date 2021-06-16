import React, { useState, useEffect } from 'react';
import Contacts from './components/contacts';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import configData from "./config.json";

function App() {
  const [users, setUsers] = useState();



  useEffect(async () => {
    //axios jest do feczowania
    const result = await axios(
      configData.SERVER_URL,
    );
    setUsers(result.data);
  },[]);

  return (
    <div>
      {users &&
        <Contacts users={users} />
      }
    </div>
  );
}

export default App;