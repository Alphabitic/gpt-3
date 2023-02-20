
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    justifyContent: 'center',
    alignItems:'center',
    marginTop:'50px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    marginBottom:'5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  formBut: {
    marginBottom:'5px',
    marginLeft:'10px',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  spaceBut: {
    marginRight:'10px',
    },
}));
