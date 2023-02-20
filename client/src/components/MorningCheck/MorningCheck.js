import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import FolderIcon from '@material-ui/icons/Folder';
import { Redirect } from 'react-router-dom';


const checkItems = [
{id:1, nav:'MXTOOLBOX - 8', path:'https://firebasestorage.googleapis.com/v0/b/andria-zola.appspot.com/o/Proc%C3%A9dure%20V%C3%A9rifications%20quotidiennes_Matin.pdf?alt=media&token=6865feb3-2f4d-4bac-86f1-4b9b1e14e758' },
{id:2, nav:'VIDELIO', path:'https://firebasestorage.googleapis.com/v0/b/andria-zola.appspot.com/o/%5BVIDELIO%5D%20Controle%20Plateforme%20V2.1.pdf?alt=media&token=bd1a7110-b9c9-4a8d-bb87-bd826151ff55'  }, 
{id:3, nav:'URL et CERT', path:'/posts'  },
{id:4, nav:'SAGESS', path:'https://firebasestorage.googleapis.com/v0/b/andria-zola.appspot.com/o/SAGESS%20Morning%20check.pdf?alt=media&token=4e88204c-10c0-4470-9318-c166e4a9eed2'  },
{id:5, nav:'CFR', path:'https://firebasestorage.googleapis.com/v0/b/andria-zola.appspot.com/o/%5BCFR%5D%20VEEAM-%20V%C3%A9rification%20du%20rapport%20de%20sauvegarde%20quotidien.pdf?alt=media&token=36420d4f-bb4d-4bb9-baff-1b056c9e5fa3'  },
{id:6, nav:'VIASANTE', path:'https://firebasestorage.googleapis.com/v0/b/andria-zola.appspot.com/o/%5BVIS%5D%20V%C3%A9rification%20quotidienne.pdf?alt=media&token=9077c3df-124f-4dc1-89eb-6aafedb294f8'  },
{id:7, nav:'GFM', path:'https://firebasestorage.googleapis.com/v0/b/andria-zola.appspot.com/o/%5BGFM%5D%20Controle%20Plateforme%20V3_6.pdf?alt=media&token=d114f763-a0da-4f08-9833-207ff8d83a67'  },
{id:8, nav:'ZABBIX', path:'Zabbix'  },
{id:9, nav:'VIRT', path:'https://firebasestorage.googleapis.com/v0/b/andria-zola.appspot.com/o/%5BVIRT%5D%20Proc%C3%A9dure%20Morning-Check_LIGHT_v2.2.pdf?alt=media&token=7eac6d93-3729-45ea-9854-13d17c46ccb4'  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    overflow: 'auto',
    maxHeight: 600,
    marginRight:'20px',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  link: {
textDecoration:'none'
  },
}));

export default function MorningCheck() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>

      {checkItems.map((sectionId) => (
         <li key={sectionId.id} className={classes.listSection}>
             <ul className={classes.ul}>
             <a  className={classes.link} href={sectionId.path} >   <ListSubheader> <FolderIcon />{`Morning check ${sectionId.id} : ${sectionId.nav}`}</ListSubheader></a>
          </ul>
        </li>
      ))}
    </List>
  );
}