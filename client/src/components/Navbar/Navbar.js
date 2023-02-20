import React, { useState, useEffect } from 'react';
import { getPostsBySearch } from '../../actions/posts';
import { AppBar, Typography, Toolbar, Avatar, Button, Box } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import BusinessIcon from '@material-ui/icons/Business';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import './Header.css';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';

const drawerWidth = 240;
const navItems = [{id:1, nav:'Accueil', ic:<HomeIcon/>, path:'/morning' },
{id:2, nav:'Ticket',ic:<AddAlarmIcon/>, path:'/ticket'  },
{id:3, nav:'Procédures',ic:<SupervisorAccountIcon/>, path:'/process'  }, 
{id:4, nav:'Traitements',ic:<BusinessIcon/>, path:'/posts'  },
{id:5, nav:'Memo',ic:<NotificationsActiveIcon/>, path:'/all'  },

];



function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const Navbar = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };


  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div className="Header">
    <div className="Header__left">
    
    <FireplaceIcon /></div>   
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                
              </Box>
              <div className="Header__right">
        
              {navItems.map((navItem) => (
                      <div key={navItem.id} className="HeaderOption">
                          <div className="Header__left">
                            <NavLink  className="Header__left" to={navItem.path}> {navItem.ic} <p className='Header_nav'>  {navItem.nav} </p> </NavLink>

               
                </div>
                </div>
               ))}
                </div>
        {user?.result ? (<>
          <div  onKeyDown={handleKeyPress}   className={classes.search} value={search} onChange={(e) => setSearch(e.target.value)}>
            <div  className={classes.searchIcon}>
              <SearchIcon onClick={searchPost} />
            </div>
            <InputBase
              placeholder="Rechercher..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>
            
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >

      <Avatar className="Header__icon" alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
     
        </Button>
      
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>

                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem component={Link} to="/auth" onClick={logout}>Déconnexion</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
          </>
        ) : (
        <>
        
        </>
        
          
        )}
     
      
    </div>
  );
};

export default Navbar;
