import "./reels.css";
import Story from "./story";
import image1 from "./images/image-1.jpg";
import image2 from "./images/image-2.jpg";
import image3 from "./images/image-3.jpg";
import image4 from "./images/image-4.jpg";
import image5 from "./images/image-5.jpg";
import auntybos from "./images/aunty-bos.jpg"

const Reels = () => {
    return ( 
        <div className="reels">
            < Story image={image1} 
            title={"Ada Glory"}
            profile={auntybos}
             />
             < Story image={image2} 
            title={"Ada Glory"}
            profile={auntybos}
             />
             < Story image={image3} 
            title={"Ada Glory"}
            profile={auntybos}
             />
           < Story image={image4} 
            title={"Ada Glory"}
            profile={auntybos}
             />
             < Story image={image5} 
            title={"Ada Glory"}
            profile={auntybos}
             />
            
        </div>
     );
}
 
export default Reels;