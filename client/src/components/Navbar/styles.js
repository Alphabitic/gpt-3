import { alpha, makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    margin: '0 30px 30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color:'dark',
    padding: '10px 50px',
    backgroundColor:'dark',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: "#FF6600",
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FF6600',
    '&:hover': {
      backgroundColor: 'dark',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    }
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  box: {
    color: '#FF6600',
  },

  logout: {
    marginLeft: '50px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FF6600',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  logos: {
    fontFamily:'Noto Sans JP',
    textDecoration:'none'
  },

orange: {
  color: theme.palette.getContrastText(deepOrange[500]),
  backgroundColor: deepOrange[500],
},

}));
