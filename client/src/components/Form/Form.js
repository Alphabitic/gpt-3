import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '',
  serveur: '', console: '',
  compte: '', action1: '',
  action2: '', action3: '',
  action4: '', demande: '',
  traitement: '', nom: '',
  tags: [], selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '',
    serveur: '', console: '',
    compte: '', action1: '',
    action2: '', action3: '',
    action4: '', demande: '',
    traitement: '', nom: '',
    tags: [], selectedFile: '' });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Enregistrez-vous ou connectez-vous pour voir le contenu
        </Typography>
      </Paper>
    );
  }

 // const handleAddChip = (tag) => {
   // setPostData({ ...postData, tags: [...postData.tags, tag] });
 // };

 // const handleDeleteChip = (chipToDelete) => {
 //   setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
 // };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
     
{/*  */}
<div  className={classes.formBut} >
  <div className={classes.spaceBut} >
<FormControl variant="outlined">

        <InputLabel htmlFor="outlined-age-native-simple">Traitement</InputLabel>
        <Select
          native
          value={postData.message} 
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          label="Traitement"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value='Demande'>Demande</option>
          <option value='Espace disque' >Espace disque</option>
          <option value='Service arrêté'>Service arrêté</option>
        </Select>
     
      </FormControl>
      </div>
      <div className={classes.spaceBut} >
      <FormControl variant="outlined" >

        <InputLabel htmlFor="outlined-age-native-simple">Console</InputLabel>
        <Select
          native
          value={postData.console} 
          onChange={(e) => setPostData({ ...postData, console: e.target.value })}
          label="Console"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value='mRemoteNG'>mRemoteNG</option>
          <option value='Vsphère' >Vsphère</option>
          <option value='RDP'>RDP</option>
        </Select>
      </FormControl>
      </div>
</div>

      
 
{/*  */}

<div>
        <TextField name="title" variant="outlined" label="Ticket"  value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} /> 
        <TextField name="traitement" variant="outlined" label="Objet du traitement"  value={postData.traitement} onChange={(e) => setPostData({ ...postData, traitement: e.target.value })} />
        <TextField name="nom" variant="outlined" label="Nom client"  rows={4} value={postData.nom} onChange={(e) => setPostData({ ...postData, nom: e.target.value })} />
        </div>
        <div>
        <TextField name="demande" variant="outlined" label="Problematique"  value={postData.demande} onChange={(e) => setPostData({ ...postData, demande: e.target.value })} />
        <TextField name="serveur" variant="outlined" label="Serveur"   rows={4} value={postData.serveur} onChange={(e) => setPostData({ ...postData, serveur: e.target.value })} />
        <TextField name="compte" variant="outlined" label="Compte"   rows={4} value={postData.compte} onChange={(e) => setPostData({ ...postData, compte: e.target.value })} />
        </div>
        <div>
        <TextField name="action1" variant="outlined" label="Action 1"  value={postData.action1} onChange={(e) => setPostData({ ...postData, action1: e.target.value })} />
        <TextField name="action2" variant="outlined" label="Action 2"   rows={4} value={postData.action2} onChange={(e) => setPostData({ ...postData, action2: e.target.value })} />
        <TextField name="action3" variant="outlined" label="Action 3"   rows={4} value={postData.action3} onChange={(e) => setPostData({ ...postData, action3: e.target.value })} />
        </div>
       
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

        <ButtonGroup disableElevation variant="contained" color="primary">
        <Button   size="large" type="submit" >Envoyer</Button>
        <Button color="secondary" size="large" onClick={clear} >Effacer</Button>
        </ButtonGroup>
     
      </form> 

    </Paper>
  );
};

export default Form;
