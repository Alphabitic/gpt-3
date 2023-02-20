import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return "Pas d'éléments à afficher";

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={2}>
        {posts?.map((post) => (
          <Grid key={post._id} item xl={3} xs={10} sm={10} md={6} lg={2}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
