import React,{useState} from 'react';
import { Grid, CircularProgress,Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { TablePagination } from '@material-ui/core';
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
      margin:'10px',
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });



const Dashboard = ({ setCurrentId }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return 'No posts';

  return (
    isLoading ? (
      <Box display="flex" justifyContent="center" alignItems="center" height={200}>
        <CircularProgress />
      </Box>
    ) : (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Ticket</StyledTableCell>
              <StyledTableCell align="left">Traitement</StyledTableCell>
              <StyledTableCell align="left">Statut&nbsp;</StyledTableCell>
              <StyledTableCell align="left">Date de traitement&nbsp;</StyledTableCell>
              <StyledTableCell align="left">SLA&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {(rowsPerPage > 0
    ? posts?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : posts
  ).map((post) => (
    <StyledTableRow key={post._id}>
      <StyledTableCell component="th" scope="row">
        {post.title}
      </StyledTableCell>
      <StyledTableCell align="left">{post.demande}</StyledTableCell>
      <StyledTableCell align="left">{post.message}</StyledTableCell>
      <StyledTableCell align="left">
        {moment(post.createdAt).fromNow()}
      </StyledTableCell>
      <StyledTableCell align="left">{post.title}</StyledTableCell>
    </StyledTableRow>
  ))}
</TableBody>
<TablePagination
  rowsPerPageOptions={[10, 20, 30]}
  component="div"
  count={posts?.length || 0}
  rowsPerPage={rowsPerPage}
  page={page}
  onChangePage={(event, newPage) => setPage(newPage)}
  onChangeRowsPerPage={(event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }}
/>

        </Table>
      </TableContainer>
    )
  );
};

export default Dashboard;