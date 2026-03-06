import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Text } from './components/Text';
import { Users } from './components/Users';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {

      const response = await fetch('https://reqres.in/api/users?page=2', {
        headers: {
          'x-api-key': 'reqres_472be74aa8924e94b91744bdf45b5875',
          'Content-Type': 'application/json',
        }
      }).then(res => res.json()).then(json => {setUsers(json.data)});
    };
    fetchUsers();
  }, []);
  
  return (
    <div className='main'>
      {/* <Counter/> */}
      {/* <Text/> */}
      <Users users={users}/>
    </div>
  );
}

export default App;
