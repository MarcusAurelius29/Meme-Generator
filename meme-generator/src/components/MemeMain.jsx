import { useState } from "react"
import MemesData from "./MemesData"

function MemeMain() {
    function handleClick() {
        const memesArray = MemesData.data
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    const [memeImage , setMemeImage] = useState("")

    return(
        <div className="container">
            <form className="meme-form">
                <div className="input-field">
                    <input placeholder="Top text"></input>
                    <input placeholder="Bottom text"></input>
                </div>
                <button className="submit-button" onClick={handleClick()}>Get a new meme image</button>


            </form>
            
        </div>
    )
}

export default MemeMain