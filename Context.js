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
  
  return (
    <pixSomContext.Provider value={{allPhotos}}>
      {children}
    </pixSomContext.Provider>
  )
}

export {pixSomContextProvider, pixSomContext}