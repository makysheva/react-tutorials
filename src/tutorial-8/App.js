import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      let response = await fetch('https://617d0c8a1eadc5001713638e.mockapi.io/users');

      if (response.ok) {
        let users = await response.json();
        return setUsers(users);
      } else {
        throw new Error('Данные не получены');
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <ul>
        {users.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <button onClick={getUsers}>Список пользователей</button>
    </div>
  );
};

export default App;
