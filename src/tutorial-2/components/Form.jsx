function FormComponent() {
  let emailInputValue = '';
  let passwordInputValue = '';

  function onChangeInput(e) {
    if (e.target.name === 'email') {
      emailInputValue = e.target.value;
    } else {
      passwordInputValue = e.target.value;
    }
  }

  const handleValidation = () => {
    let formIsValid = true;
    if (!emailInputValue.trim() || !passwordInputValue.trim()) {
      formIsValid = false;
    } else {
      formIsValid = true;
    }

    return formIsValid;
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (handleValidation()) {
      console.log({ emailInputValue, passwordInputValue });
      emailInputValue = '';
      passwordInputValue = '';
    } else {
      alert('Пожалуйста, заполните поля');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="E-Mail" onChange={onChangeInput} name="email" />
      <input type="password" placeholder="Пароль" onChange={onChangeInput} name="password" />
      <button type="submit" onClick={handleSubmit}>
        Войти
      </button>
    </form>
  );
}

export default FormComponent;
