import React from 'react';

export default class ProfileClass extends React.Component {
  render() {
    return (
      <div className="profile-wrap">
        <h1>Привет, {this.props.name}!</h1>
        <p>Дата регистрации: {this.props.registredAt}</p>
      </div>
    );
  }
}
