import React from 'react';
import { useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });



const TableDash = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();
  
  const openPost = (e) => {
    //dispatch(getPost(post._id, history));
    
        history.push(`/posts/${post._id}`);
      };
      

  return (
    <>

         
           <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ticket</StyledTableCell>
            <StyledTableCell align="right">Traitement</StyledTableCell>
            <StyledTableCell align="right">Statut&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Date de traitement&nbsp;</StyledTableCell>
            <StyledTableCell align="right">SLA&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {post.title}
              </StyledTableCell>
              <StyledTableCell align="right">{post.name}</StyledTableCell>
              <StyledTableCell align="right">{post.title}</StyledTableCell>
              <StyledTableCell align="right">{moment(post.createdAt).fromNow()}</StyledTableCell>
              <StyledTableCell align="right">{post.title}</StyledTableCell>
            </StyledTableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
      {/* 
          </Grid>
        ))}
      </Grid>
    */}
       </>
         );
};

export default TableDash;