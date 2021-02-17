import React, {useState, useContext} from 'react';
import {pixSomContext} from '../Context'

function Image({className, photo, photoId}) {
  const [isHovered, setIsHovered] = useState(false);
  const {toggleFav} = useContext(pixSomContext);

  return (
    <div 
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)} 
    className={`${className} image-container`}>
      {isHovered? <i onClick={()=>toggleFav(photo.id)} className='ri-heart-line favorite'></i> : null}
      {photo.isFavorite ? <i onClick={()=>toggleFav(photo.id)} className='ri-heart-fill favorite'></i> : null}
      {isHovered ? <i className='ri-add-circle-line cart'></i> : null}
   
      <img src={photo.url} className='image-grid'/>
    </div>
  )
}

export default Image