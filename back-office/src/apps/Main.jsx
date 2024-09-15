
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { TfiMenuAlt } from "react-icons/tfi";
import { MdDashboard, MdViewModule } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaUserGroup } from "react-icons/fa6";
import { useNavigate, Outlet } from 'react-router-dom';
import { MDBContainer, MDBNavbar, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import { MyContext } from '../router/Router';
import { Link } from "react-router-dom";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { MdSettingsAccessibility } from "react-icons/md";
import { AiFillFolder } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa6";
const drawerWidth = 240;

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Main = () => {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = React.useContext(MyContext)
  console.log(user, 'user from main')

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
  <Toolbar className="d-flex justify-content-between">
    {/* Left section (Menu Button) */}
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{
        marginRight: 5,
        ...(open && { display: 'none' }),
      }}
    >
      <TfiMenuAlt />
    </IconButton>

    {/* Right section (User Info) */}
    <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {user.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#BDBDBD', fontSize: '0.8rem' }}>
          {user.role}
        </Typography>
      </Box>

      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar 
            alt={user.name} 
            src={user.avatar || "../img/lms"} 
            sx={{ width: 48, height: 48 }}  
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            onClick={() => {
              if (setting === 'Logout') {
                localStorage.clear();
                window.location.href = '/';
              }
            }}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  </Toolbar>
</AppBar>



      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { name: "Dashboard", path: "/", icon: <MdDashboard />, roles: ['Admin', 'ResponsableRH'] },
            { name: "Profile", path: "profile", icon: <CgProfile />, roles: ['Admin', 'ResponsableRH', 'Recruteur', 'Employe', 'Stagiaire',] },
            { name: "Joboffre", path: "joboffre", icon: <AiFillFolder />, roles: ['Admin', 'ResponsablesRH'] },
            { name: "Demandes", path: "demandes", icon: <MdSettingsAccessibility />, roles: ['Admin', 'ResponsableRH', 'Recruteur'] },
            { name: "Internship offer", path: "internshipoffer", icon: <AiFillFolder />, roles: ['Admin', 'ResponsableRH', 'Recruteur'] },
            { name: "Employees", path: "employees", icon: <FaUserTie />, roles: ['Admin', 'ResponsableRH', 'Recruteur', 'Employe', 'Stagiaire'] },
            { name: "Condidature", path: "condidature", icon: <FaUsers />, roles: ['Admin', 'ResponsableRH', 'Recruteur'] }
          ].map((e, index) => {
            if (e.roles.includes(user.role)) {
              return (
                <ListItem key={e.name} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton onClick={() => navigate(e.path)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {e.icon}
                    </ListItemIcon>
                    <ListItemText primary={e.name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              )
            }

          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
export default Main
