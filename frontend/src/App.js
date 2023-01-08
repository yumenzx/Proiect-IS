import './App.css';
import { useState } from 'react';
import NavBar from './Navbar';

function App() {

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [userType, setUserType] = useState('client');

  const userAuthentication = (user, userType) => {
    setUserLoggedIn(!isUserLoggedIn);
    setCurrentUser(user);
    setUserType(userType);
  }
  
  return (
    <div>
      <NavBar isUserLoggedIn={isUserLoggedIn} userAuthentication={userAuthentication} currentUser={currentUser} userType={userType}></NavBar>
    </div>
  );
}

export default App;