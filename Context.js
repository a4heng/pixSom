import React, {useState, useEffect} from 'react';

const pixSomContext = React.createContext();
const URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'


function pixSomContextProvider({children}){
  const [allPhotos, setAllPhotos] = useState([])

  useEffect(()=>{
    fetch(URL)
    .then(res => res.json())
    .then(data => setAllPhotos(data))
  },[])

  const toggleFav = (id) => {
    const updatedPhoto = allPhotos.map(e=>{
      if(e.id === id){
        return {...e,isFavorite:!e.isFavorite}
      }else{
        return e
      }
     
  })
  console.log(allPhotos[id].isFavorite)
  setAllPhotos(updatedPhoto)
  } 
  // console.log(allPhotos)
  return (
    <pixSomContext.Provider value={{allPhotos, toggleFav}}>
      {children}
    </pixSomContext.Provider>
  )
}

export {pixSomContextProvider, pixSomContext}