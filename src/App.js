import './App.css';
import Home from './Pages/Home';
import UserPage from './Pages/UserPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import Shopping from './Pages/Shoppin/Shopping';
import AddComputer from './Pages/AddComp/AddComputer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='userpage' element={<UserPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='shopping' element={<Shopping />} />
          <Route path='addcomputer' element={<AddComputer />} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
