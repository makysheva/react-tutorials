import React from 'react';
import styles from './Components.module.scss';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Comments = ({ fullname, email, comment }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className="">
        <List className={styles.list}>
          <ListItem>
            <Box component="form" noValidate autoComplete="off">
              <Typography variant="h6" gutterBottom component="div" className="">
                Отзывы:
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} alt={fullname}>
                      N
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={fullname}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"></Typography>
                        {comment}
                      </React.Fragment>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: deepPurple[500] }} alt={fullname}>
                      OP
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={fullname}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"></Typography>
                        {comment}
                      </React.Fragment>
                    }
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} alt={fullname}>
                      JJ
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={fullname}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"></Typography>
                        {comment}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </ListItem>
        </List>
      </Container>
    </React.Fragment>
  );
};

export default Comments;
