import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from "./pages/Register";
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import theme from './utils/theme'
import Footer from './components/Footer/Footer';



function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
