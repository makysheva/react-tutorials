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
    const formEl = document.getElementsByClassName('form__wrap');

    if (handleValidation()) {
      console.log({ emailInputValue, passwordInputValue });
      emailInputValue = '';
      passwordInputValue = '';
      formEl[0].reset();
    } else {
      alert('Пожалуйста, заполните поля');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form__wrap">
      <input
        type="text"
        placeholder="E-Mail"
        onChange={onChangeInput}
        name="email"
        className="form__input"
      />
      <input
        type="password"
        placeholder="Пароль"
        onChange={onChangeInput}
        name="password"
        className="form__input"
      />
      <button type="submit" onClick={handleSubmit} className="form__btn">
        Войти
      </button>
    </form>
  );
}

export default FormComponent;
