import React, { useState } from 'react';
import { Container, Grow, Grid,Paper } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [setCurrentId] = useState(0);
 
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={1} className={classes.gridContainer}>
        <Posts setCurrentId={setCurrentId} />
        </Grid>
        {(!searchQuery ) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
      </Container>
 
    </Grow>
  );
};

export default Home;
