import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from "./pages/Register";
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import theme from './utils/theme'
import Footer from './components/Footer/Footer';
import loader from "../src/images/loader.gif";
import { AuthWrapper } from "./context/auth";
import BookListing from './pages/BookListing';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <AuthWrapper>
          <div className="loader-wrapper">
            <img src={loader} alt="loader" />
          </div>
          <Header />
          {/* <Searchbar/> */}
          <Routes>
            <Route path='/' element={<BookListing />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
            <Footer />
          </AuthWrapper>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
