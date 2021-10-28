import React from 'react';
import styles from './Form.module.scss';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

const Form = ({ onShow }) => {
  const [comments, setComments] = React.useState([]);

  const [fields, setFields] = React.useState({ name: '', email: '', text: '' });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setComments([...comments, fields]);

    if (onShow) {
      onShow([...comments, fields]);
    }

    e.target.reset();
    setFields({ name: '', email: '', text: '' });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={styles.container}>
        <List className={styles.list}>
          <ListItem className={styles.listItem}>
            <Box noValidate autoComplete="off">
              <Typography variant="h5" gutterBottom component="div" className={styles.h5}>
                Обратная связь:
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Имя"
                  variant="outlined"
                  className={styles.input}
                  value={fields.name || ''}
                  onChange={handleChangeInput}
                  name="name"
                />
                <TextField
                  id="outlined-email-input"
                  label="Почта"
                  variant="outlined"
                  type="email"
                  className={styles.input}
                  value={fields.email || ''}
                  onChange={handleChangeInput}
                  name="email"
                />

                <TextField
                  id="outlined-textarea"
                  label="Текст"
                  variant="outlined"
                  placeholder="Текст..."
                  multiline
                  className={styles.textarea}
                  value={fields.text || ''}
                  onChange={handleChangeInput}
                  name="text"
                />
                <Button variant="contained" className={styles.button} type="submit">
                  Отправить
                </Button>
              </form>
            </Box>
          </ListItem>
        </List>
      </Container>
    </React.Fragment>
  );
};

export default Form;
