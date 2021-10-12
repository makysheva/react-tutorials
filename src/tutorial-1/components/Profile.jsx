function Profile(props) {
  return (
    <div className="profile-wrap">
      <h1>Привет, {props.name}!</h1>
      <p>Дата регистрации: {props.registredAt}</p>
    </div>
  );
}

export default Profile;
