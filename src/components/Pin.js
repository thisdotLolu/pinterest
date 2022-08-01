import { Favorite,FavoriteBorder } from '@mui/icons-material'
import React, { useState } from 'react'

const Pin = ({pinSize,photo}) => {
    const [like,setLike]=useState(false)

    const handleLike=()=>{
        setLike(!like)
    }
  return (
    <div className={`pin ${pinSize}`}>
        <img 
        className='mainPic'
        src={photo?.urls.regular}
        alt='architecture'/>
        <div className="content">
            <a  href='https://pinterest.com' style={{textDecoration:'none', color:'white'}}>Check image</a>
        <div className="forward">
            {like?(
                <Favorite 
                style={{color:'white'}}
                onClick={handleLike}
                sx={{fontSize:35}}
             />
            ):( <FavoriteBorder
              style={{color:'white'}}
                onClick={handleLike}
                sx={{fontSize:35}}
            />)}
        
          </div>
        </div>
    </div>
  )
}

export default Pin