import './App.css';
import { Counter } from './components/Counter';
import { Text } from './components/Text';
import { Users } from './components/Users';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {

      const response = await fetch('https://reqres.in/api/users?page=2', {
        headers: {
          'x-api-key': 'reqres_472be74aa8924e94b91744bdf45b5875',
          'Content-Type': 'application/json',
        }
      }).then(res => res.json()).then(json => { setUsers(json.data) });
    };
    fetchUsers();
  }, []);

  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) setInvites(prev => prev.filter(ch => ch !== id));
    else setInvites(prev => [...prev, id]);
  }

  return (
    <div className='main'>
      {/* <Counter/> */}
      {/* <Text/> */}
      <Users
        users={users}
        searchValue={searchValue} onChangeValue={onChangeValue}
        invites={invites} onClickInvite={onClickInvite}
      />
    </div>
  );
}

export default App;
