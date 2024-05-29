import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import SignUp from './components/SingUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/landing' element={<Landing></Landing>}></Route>
        <Route path='/login'></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='myPortfolio'></Route>
      </Routes>
    </div>
  );
}

export default App;
