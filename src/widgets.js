import './widgets.css';
import { BsGiftFill } from "react-icons/bs";
import {BsCameraVideo} from "react-icons/bs";
import {BsSearch} from "react-icons/bs";
import {FiMoreVertical} from "react-icons/fi";
import sponsor from './images/sponsor.png';
import Contact from './contact';
import image1 from './images/image-1.jpg'
import image2 from './images/image-2.jpg'
import image3 from './images/image-3.jpg'
import image4 from './images/image-4.jpg'
import image5 from './images/image-5.jpg'

const Widgets = () => {
    return ( 
        <div className="widgets">
        <div className="widgets__img">
            <img src={sponsor} alt="" />
            </div>
            <div className="birthday">
                <h3>Birthdays</h3>
                <div className="birthday__person">
                    <BsGiftFill />
                    <div className="birthday__name">
                        <h4>Micheal Bane's</h4>
                        <p>birthday is today</p>
                    </div>
                </div>
           </div>
           <div className="contact__menu">
               <h4>Contacts</h4>
               <div className="contact__icon">
                 <BsCameraVideo />
                 <BsSearch />
                 <FiMoreVertical />
               </div>
           </div>
           <Contact 
           profile={image1}
           username={'Ada Glory'}
           />
                 <Contact 
           profile={image2}
           username={'Gray Hatgrace'}
           />
                 <Contact 
           profile={image3}
           username={'Anna Gale'}
           />
                 <Contact 
           profile={image4}
           username={'Endurance Rice'}
           />
                 <Contact 
           profile={image5}
           username={'Abba Grace'}
           />
        </div>
        
     );
}
 
export default Widgets;