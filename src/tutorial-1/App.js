import Profile from './components/Profile';
import ProfileClass from './components/ProfileClass';

const options = { day: 'numeric', month: 'long', year: 'numeric' };
const date = new Date(2021, 9, 12).toLocaleDateString('ru-RU', options);

function App() {
  return (
    <>
      <Profile name="Алия" registredAt={date} />
      <ProfileClass name="Сафия" registredAt={date} />
    </>
  );
}

export default App;
