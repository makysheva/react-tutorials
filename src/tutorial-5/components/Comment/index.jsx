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
import { deepOrange, deepPurple } from '@mui/material/colors';

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
                {mainList.map((itemMainList) => {
                  return itemMainList.map((itemComment, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: deepOrange[500] }} alt={itemComment.name}>
                            N
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={itemComment.name}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"></Typography>
                              {itemComment.text}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    );
                  });
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
