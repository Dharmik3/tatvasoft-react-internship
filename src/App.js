import { BrowserRouter, Route ,Routes,Link} from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import User from './components/User';
import Form from "./pages/Form";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
 
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#6CB4EE',
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
    
    display: "flex",
    alignItems:"center",
    justifyContent: "space-between",
    gap:"20px"
  },
  header: {
    backgroundColor: "#0076b9",
 
  },
  link: {
    outline: "none",
    textDecoration: "none",
    color:"#fff"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        
          <AppBar position="static" className={classes.header}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to='/' className={classes.link}>Signup</Link>
                <Link to='/user' className={classes.link}>User</Link>
                <Link to='/admin' className={classes.link}>Admin</Link>
            </Typography>
          </Toolbar>
          </AppBar>
        <nav>
       
        </nav>
        <header className="App-header">
          <Routes>
              <Route path='/' element={<Form />} />
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
