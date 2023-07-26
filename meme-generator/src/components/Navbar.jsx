import meme from '../assets/meme.png'

function Navbar() {
    return(
        <nav className="navbar">
         <img src = {meme} alt='meme' className='meme-photo'></img>
         <h1>Meme Generator</h1>
        </nav>
    ) 
}

export default Navbar