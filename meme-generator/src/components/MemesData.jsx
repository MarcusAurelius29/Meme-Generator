import meme1 from '../assets/meme1.jfif'
import meme2 from '../assets/meme2.jfif'
import meme3 from '../assets/meme3.jfif'

const data = {
    success: true,
    data: {
      memes: [
        {
          id: 1,
          img: meme1,
        },
        {
            id:2,
            img:meme2,
        },
        {
            id:3,
            img:meme3,
        }
      ],
    },
  };
  
  export default data;