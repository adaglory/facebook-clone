import "./sidebar.css";
import SidebarRow from "./sidebarRow";
import { FcBiotech } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcClapperboard } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { useStateValue } from "./stateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={FcBiotech} title='Covid-19 Center' />
      <SidebarRow Icon={FcCollaboration} title='Friends' />
      <SidebarRow Icon={FcConferenceCall} title='Groups' />
      <SidebarRow Icon={FcClapperboard} title='Watch' />
      <SidebarRow Icon={FcCalendar} title='Events' />
      <SidebarRow Icon={FcClock} title='Memories' />
      <SidebarRow Icon={FcBookmark} title='Saved' />
      <SidebarRow Icon={FcTemplate} title='Pages' />
      <SidebarRow Icon={FcBriefcase} title='Jobs' />
    </div>
  );
};

export default Sidebar;
