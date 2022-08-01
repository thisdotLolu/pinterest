import { ArrowBack } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import './SearchedPage.css'


const SearchedPage = () => {
    const[searched,setSearched]=useState([])
    const params=useParams()

    useEffect(()=>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${params.search}&client_id=Hd2vBfrHAgu1bk9IZAJlmTSka_mJQRDq09AcafqA9WM`)
        .then((res)=>{
            setSearched(res.data.results)
        })
    },[params.search])
    console.log(searched)


  return (
      <div>
          <Link 
          className='back_search'
          to='/'><ArrowBack
          className='back_search_icon'
          style={{marginLeft:'15px',position:'fixed'}}
          sx={{fontSize:40}}
          /></Link>
         <h2 style={{textAlign:'center',paddingBottom:'15px'}}>Your search results for '{params.search}'</h2>
         <div className='search-container'>
        {
            searched.map((each)=>{
                return( 
                    <div className='search-item' key={each.id}>
                       <a className='image'href="https://www.pinterest.com"><img 
                       src={each.urls?.regular} alt='image'/></a> 
                    </div>
                )
            })
        }
    </div>
      </div>
    
  )
}

export default SearchedPage