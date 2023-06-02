import React from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
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
import Book from './pages/Book';
import EditBook from './pages/EditBook';
import { useAuthContext } from "../src/context/auth";
import Users from './pages/Users';
import EditUser from './pages/EditUser';
import Category from './pages/Category';
import EditCategory from './pages/EditCategory';
import UpdateProfile from './pages/UpdateProfile';

function App() {
  const authContext = useAuthContext();
  const Redirect = <Navigate to='/login' />;
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
              
            <Route exact path='/login' element={<Login />} />
              <Route exact path='/register' element={!authContext.user.id ? <Register /> : Redirect} />
              <Route exact path='/' element={!authContext.user.id ? <BookListing /> : Redirect} />
              <Route exact path='/book' element={!authContext.user.id ? <Book /> : Redirect} />
              <Route exact path='/edit-book/:id' element={!authContext.user.id ? <EditBook /> : Redirect} />
              <Route exact path='/add-book' element={!authContext.user.id ? <EditBook /> : Redirect} />
              <Route exact path='/users' element={!authContext.user.id ? <Users /> : Redirect} />
              <Route exact path='/edit-user/:id' element={!authContext.user.id ? <EditUser /> : Redirect} />
              <Route exact path='/category' element={!authContext.user.id ? <Category /> : Redirect} />
              <Route exact path='/edit-category/:id' element={!authContext.user.id ? <EditCategory /> : Redirect} />
              <Route exact path='/add-category' element={!authContext.user.id ? <EditCategory /> : Redirect} />
              <Route exact path='/update-profile' element={!authContext.user.id ? <UpdateProfile /> : Redirect} />
          </Routes>
            <Footer />
          </AuthWrapper>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
