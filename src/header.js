import "./header.css";
import facebook from "./images/facebook.png";
import { BsSearch } from "react-icons/bs";
import { BsHouseFill } from "react-icons/bs";
import { BsTvFill } from "react-icons/bs";
import { BsXDiamondFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsGridFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { SiMessenger } from "react-icons/si";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./stateProvider";
const Header = () => {
  const [{ user }, dispactch] = useStateValue();
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={facebook} alt='Logo' />
        <div className='header__input'>
          <BsSearch />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      <div className='header__middle'>
        <div className='header__menu header__menu--active'>
          <BsHouseFill />
        </div>
        <div className='header__menu'>
          <BsTvFill />
        </div>
        <div className='header__menu'>
          <BsXDiamondFill />
        </div>
        <div className='header__menu'>
          <BsPeopleFill />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <div className='Header__button'>
          <BsGridFill />
        </div>

        <div className='Header__button'>
          <SiMessenger />
        </div>

        <div className='Header__button'>
          <BsFillBellFill />
        </div>

        <div className='Header__button'>
          <BsFillCaretDownFill />
        </div>
      </div>
    </div>
  );
};

export default Header;
