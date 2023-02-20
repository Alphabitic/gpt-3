import React, { useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import {  useLocation } from 'react-router-dom';
import Form from '../Form/Form';

import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Ticket = () => {
  const classes = useStyles();
  const query = useQuery();

  const [currentId, setCurrentId] = useState(0);
 
  return (
    <Grow in>
      <Container component="main" maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={2} className={classes.gridContainer}>


           
       <Form currentId={currentId} setCurrentId={setCurrentId} />

          </Grid> 

      </Container>
 
    </Grow>
  );
};

export default Ticket;
