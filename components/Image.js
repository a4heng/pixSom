import React, {useState} from 'react';

function Image({className, src}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)} 
    className={`${className} image-container`}>
      <img src={src} className='image-grid'/>
    </div>
  )
}

export default Image