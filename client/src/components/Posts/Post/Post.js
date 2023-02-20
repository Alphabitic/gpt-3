import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import WorkIcon from '@material-ui/icons/Work';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><WorkIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} ✔${likes.length > 1 ? '' : ''}` }</>
        ) : (
          <><WorkOutlineIcon fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? '✔' : '✔'}</>
        );
    }

    return <><WorkOutlineIcon fontSize="small" />&nbsp;✔</>;
  };

  const openPost = (e) => {
//dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
    <ButtonBase
      component="span"
      name="test"
      className={classes.cardAction}
      onClick={openPost}
    >
      <CardMedia className={classes.media} image={'https://firebasestorage.googleapis.com/v0/b/hosting-app-ee0db.appspot.com/o/Capture%20d%E2%80%99%C3%A9cran%20du%202023-02-14%2017-58-18.png?alt=media&token=4d44365e-49aa-4ec3-82b2-97896029db43'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2} name="edit">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentId(post._id);
          }}
          style={{ color: 'white' }}
          size="small"
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title1} gutterBottom variant="h6" component="h2">{post.message.charAt(0).toUpperCase() + post.message.slice(1)}</Typography>
      <Typography className={classes.title2} gutterBottom variant="p" component="h2">{post.traitement.charAt(0).toUpperCase()+ post.traitement.slice(1)}</Typography>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.nom}</Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">1- {post.action1.split(' ').splice(0, 5).join(' ')}...</Typography>
        <Typography variant="body2" color="textSecondary" component="p">2- {post.action2.split(' ').splice(0, 5).join(' ')}...</Typography><Typography variant="body2" color="textSecondary" component="p">3- {post.action3.split(' ').splice(0, 5).join(' ')}...</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> &nbsp;Supprimer
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
