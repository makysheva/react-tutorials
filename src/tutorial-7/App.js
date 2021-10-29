import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './App.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const { handleSubmit, register, formState, reset } = useForm();

  const onSubmit = (values) => {
    console.log('ФОРМА!', values);
    reset({});
  };

  console.log(formState.errors);

  const handleClickClear = () => {
    reset({});
  };

  return (
    <div className="App">
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <TextField
            name="firstName"
            label="Имя"
            autoComplete="current-firstName"
            {...register('firstName', {
              validate: (value) => value !== 'admin' || 'Nice try!',
            })}
            helperText={formState.errors.firstName && formState.errors.firstName.message}
            error={!!formState.errors.firstName}
            fullWidth
          />
          <TextField
            name="lastName"
            label="Фамилия"
            autoComplete="current-lastName"
            {...register('lastName', {
              required: 'Это обязательное поле!',
            })}
            helperText={formState.errors.lastName && formState.errors.lastName.message}
            error={!!formState.errors.lastName}
            fullWidth
          />
        </div>
        <div className={styles.row}>
          <TextField
            {...register('email', {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                message: 'Это неверная почта!',
              },
            })}
            helperText={formState.errors.email && formState.errors.email.message}
            error={!!formState.errors.email}
            name="email"
            label="E-Mail"
            autoComplete="current-email"
            fullWidth
          />
          <TextField
            {...register('password', {
              required: 'Это обязательное поле!',
            })}
            helperText={formState.errors.password && formState.errors.password.message}
            error={!!formState.errors.password}
            name="password"
            type="password"
            autoComplete="current-password"
            label="Пароль"
            fullWidth
          />
        </div>
        <div className={styles.row}>
          <TextField name="about" label="Обо мне" fullWidth />
        </div>
        <br />
        <div className={styles.row}>
          <Button type="submit" variant="contained" color="primary">
            Зарегистрироваться
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClickClear}>
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
