function FormComponent() {
  let emailInputValue = '';
  let passwordInputValue = '';

  function onChangeInput(e) {
    if (e.target.name === 'email') {
      emailInputValue = e.target.value.trim();
    } else {
      passwordInputValue = e.target.value.trim();
    }
  }

  const handleValidation = () => {
    let formIsValid = true;
    if (!emailInputValue || !passwordInputValue) {
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
      e.target.reset();
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
      <button type="submit" className="form__btn">
        Войти
      </button>
    </form>
  );
}

export default FormComponent;
