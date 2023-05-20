import { BrowserRouter, Route ,Routes,Link} from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import User from './components/User';
import Home from './components/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
          <Link to='/admin'>Admin</Link>
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
  );
}

export default App;
