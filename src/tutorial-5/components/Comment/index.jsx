import React from 'react';
import styles from './Comment.module.scss';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Comment = ({ mainList }) => {
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
                {mainList.map((item, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: deepOrange[500] }} alt={item.name}>
                          N
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"></Typography>
                            {item.text}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </ListItem>
        </List>
      </Container>
    </React.Fragment>
  );
};

export default Comment;
