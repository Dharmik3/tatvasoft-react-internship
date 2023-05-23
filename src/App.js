import { BrowserRouter, Route ,Routes,Link} from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import User from './components/User';
import Home from './components/Home';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
 
});
theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to='/'>Home</Link>
              <Link to='/user'>User</Link>
              <Link to='/admin'>Admin</Link>
            </Typography>
          </Toolbar>
          </AppBar>
        <nav>
       
        </nav>
        <header className="App-header">
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/user' element={ <User/>} />
            <Route path='/admin' element={ <Admin/>} />
       </Routes>
        </header>
      </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
