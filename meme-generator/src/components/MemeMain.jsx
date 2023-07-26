import { useState } from "react";
import MemesData from "./MemesData";
import meme2 from '../assets/meme2.jfif';

function MemeMain() {
  const [memeImage, setMemeImage] = useState();

  function handleClick() {
    const memesArray = MemesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomIndex].img);
  }

  return (
    <div className="container">
      <form className="meme-form">
        <div className="input-field">
          <input placeholder="Top text"></input>
          <input placeholder="Bottom text"></input>
        </div>
        <button className="submit-button" onClick={handleClick}>
          Get a new meme image
        </button>
      </form>
      <div className="image-displayer">
        <img src={memeImage} alt="memeImage" className="image-display"/>
      </div>
    </div>
  );
}

export default MemeMain;