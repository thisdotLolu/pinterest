import React, { useEffect } from 'react'
import { UserAuth } from './context/AuthContext'
import {GoogleButton} from 'react-google-button'
import { useNavigate } from 'react-router-dom'
// import { UserAuth } from './context/AuthContext'


const SignIn = () => {
    const navigate=useNavigate()
    const {googleSignIn,user}=UserAuth()

    //handle signin here
    const handleGoogleSignIn= async()=>{ 
    try{
        await googleSignIn()
       }catch(error){
           console.log(error)
       }
   }
   useEffect(()=>{
       if(user !== null){
           navigate('/')
       }
   },[user])
  return (
    <div style={{display:'flex', justifyContent:"center", flexDirection:'column',alignItems:'center', height:'100vh'}}>
        <h1 style={{marginBottom:'20px'}}>Sign In</h1>
        <div >
            <GoogleButton onClick={handleGoogleSignIn}/>
        </div>
    </div>
  )
}

export default SignIn