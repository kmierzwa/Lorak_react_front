import React, { useState, useEffect } from 'react';
import Contacts from './components/contacts';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState();
  
 
  useEffect(async () => {
    //axios jest do feczowania
    const result = await axios(
      'http://10.20.10.4:8081',
    );
    setUsers(result.data);
  });

  return (
    <div>
      {users &&
        <Contacts users={users} />
      }
    </div>
  );
}

export default App;