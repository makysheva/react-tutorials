import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      let response = await fetch('https://617d0c8a1eadc5001713638e.mockapi.io/users');
      let users = await response.json();
      let result = await setUsers(users);

      return result;
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
