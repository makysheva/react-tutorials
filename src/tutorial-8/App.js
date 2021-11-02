import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      let response = await fetch('https://617d0c8a1eadc5001713638e.mockapi.io/users');

      if (response.ok) {
        const users = await response.json();
        setUsers(users);
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
        {users.length
          ? users.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })
          : 'Пустой массив'}
      </ul>
      <button onClick={getUsers}>Список пользователей</button>
    </div>
  );
};

export default App;
