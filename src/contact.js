import { Avatar } from '@material-ui/core'
import './contact.css'
const Contact = ({profile, username}) => {
    return ( 
        <div className="contact">
         <Avatar src={profile} />
         <h3>{username}</h3>
        </div>
     );
}
 
export default Contact;
