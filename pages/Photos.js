import React,{useContext} from "react"
import {pixSomContext} from '../Context'
import Image from '../components/Image'
import {getClass} from '../utils'

function Photos() {
    const ctx = useContext(pixSomContext);
    const {allPhotos} = ctx;
    const imageDisplay = allPhotos.map((photo, idx)=>{
        return <Image key={idx} src={photo.url} className={getClass(idx)}/>
    })
    return (
        <main className="photos">
            {imageDisplay}
        </main>
    )
}

export default Photos