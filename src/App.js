// import logo from './logo.svg';
import './App.css';
// import MenuContainer from './components/MenuContainer';
// import {Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark, Search} from '@mui/icons-material'
// import { useEffect } from 'react';
// import Pin from './components/Pin';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
// import SignUp from './SignUp';
import SignIn from './SignIn';
import { AuthContextProvider } from './context/AuthContext';
import Profile from './Profile';
import Nothing from './Nothing';
import Logout from './Logout';
import SearchedPage from './SearchedPage';
// import MenuContainer from './components/MenuContainer';

function App() {
 
  return (
    <AuthContextProvider>
      <div className="AppComponent">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        {/* <Route path='/signup' element={<SignUp/>}/> */}
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/nothing' element={<Nothing/>}/>
        <Route path='/searched/:search'element={<SearchedPage/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </div>
    </AuthContextProvider>
    
  );
}

export default App;
