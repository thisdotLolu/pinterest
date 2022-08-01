import React from 'react'
import Pin from './components/Pin'
import MenuContainer from './components/MenuContainer'
import { Logout, Person } from '@mui/icons-material'
import { Notifications } from '@mui/icons-material'
import { Chat } from '@mui/icons-material'
import { FavoriteRounded } from '@mui/icons-material'
import { QuestionMark } from '@mui/icons-material'
import { Add } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import './App.css';
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { UserAuth } from './context/AuthContext';
import './Home.css'
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const[photoData,setPhotoData]=useState([]);
  const[searchTerm,setSearchTerm]=useState('');
  const{user,googleSignIn}=UserAuth();
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate('searched/' + searchTerm)
    setSearchTerm('')
}

  
    // if(!user){
    //   alert('Please sign in to perform this action')
    // }
  const fetchApi=async()=>{
    const response= await axios.get('https://api.unsplash.com/photos/?client_id=Hd2vBfrHAgu1bk9IZAJlmTSka_mJQRDq09AcafqA9WM')
    const data= await response.data
    console.log(data)
    setPhotoData(data)
  }
  useEffect(()=>{
    fetchApi()
  },[])
  const photos=photoData.map(pd=>{
    return pd
  })
  return (
    <div className='App'>
      <div className="menuContainer">
        <img
        src='https://www.freepnglogos.com/uploads/pinterest-logo-emblem-png-11.png'
        alt='pinterest logo'
        className='logo'
        />

        <div className="submenu">
          <div>
            {/* //each icon sent into a component */}
            {user?.email?(<Link to='/profile'><MenuContainer  icon={<Person/>}/></Link>):(<Link onClick={()=>alert('Please login to perform this action')} to='/'><MenuContainer  icon={<Person/>}/></Link>)}  
            {user?(<Link to='/nothing'><MenuContainer icon={<Notifications/>}/></Link>):(<Link  onClick={()=>alert('Please Sign in to perform this action')} to='/'><MenuContainer  icon={<Notifications/>}/></Link>)}
            {user?(<Link to='/nothing'><MenuContainer icon={<Chat/>}/></Link>):(<Link onClick={()=>alert('Please Sign in to perform this action')} to='/'><MenuContainer icon={<Chat/>}/></Link>)}
          </div>
            <div>
            {user?(<MenuContainer icon={<QuestionMark/>}/>):(<MenuContainer onClick={()=>alert('Please Sign in to perform this action')} icon={<QuestionMark/>}/>)}
            {user?(<MenuContainer icon={<Add/>}/>):(<MenuContainer onClick={()=>alert('Please Sign in to perform this action')} icon={<Add/>}/>)}
            {user?(<Link to='/logout'><MenuContainer icon={<Logout/>}/></Link>):(<Link onClick={()=>alert('i cannot log you out if you are not logged in')} to='/'><MenuContainer icon={<Logout/>}/></Link>)}
          </div>
        </div>
      </div>

      <main>
        <div className='header_home'>
        {/* <h1 style={{textAlign:'center', paddingBottom:'15px'}}>PEENTREST</h1> */}
        {user?(<button
        disabled
        onClick={()=>googleSignIn()}
        style={{margin:'15px'}}>Signed in</button>):(<button 
        onClick={()=>googleSignIn()}
        style={{margin:'15px'}}>Sign In</button>)}
        
        </div>
        
        <div className="searchBox">
          <input 
          type="text" 
          placeholder='Search..'
          onChange={(e)=>setSearchTerm(e.target.value)}
          value={searchTerm}
          />
          <div className="search">
           <Search 
           sx={{fontSize:35}}
           onClick={handleSubmit}
           className='search_icon'/>
          </div>
        </div>
        <h2 style={{textAlign:'center',paddingTop:'10px'}}>Feed</h2>
        <div className="mainContainer">
          <Pin pinSize={'small'} photo={photos[0]}/>
          <Pin pinSize={'medium'} photo={photos[1]}/>
          <Pin pinSize={'large'} photo={photos[2]}/>
          <Pin pinSize={'small'} photo={photos[3]}/>
          <Pin pinSize={'medium'} photo={photos[4]}/>
          <Pin pinSize={'large'} photo={photos[5]}/>
          <Pin pinSize={'small'} photo={photos[6]}/>
          <Pin pinSize={'medium'}photo={photos[7]}/>
          <Pin pinSize={'large'} photo={photos[8]}/>
          <Pin pinSize={'small'} photo={photos[9]}/>
          <Pin pinSize={'medium'} photo={photos[7]}/>
          <Pin pinSize={'large'} photo={photos[2]}/>
          <Pin pinSize={'small'} photo={photos[6]}/>
          <Pin pinSize={'medium'} photo={photos[8]}/>
          <Pin pinSize={'large'} photo={photos[0]}/>
        </div>
      </main>


    </div>
  )
}

export default Home;