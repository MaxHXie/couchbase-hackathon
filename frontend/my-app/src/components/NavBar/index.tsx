import { Link, useNavigate } from "react-router-dom"
import "./style.scss"
import PrimaryButton from "../buttons/PrimaryButton"
import SiteIcon from "../../static/icons/siteIcon.svg"
import CalendarIcon from "../../static/icons/calendar.svg"
import CartIcon from "../../static/icons/cartIcon.svg"
import UserrIcon from "../../static/icons/userIcon.svg"

const NavBar = () => {
  return (
    <nav className="standardPaddingSection">
      <div className="navIcon">
        <Link to="/">
          <img className="icon" src={SiteIcon} alt="icon" />
        </Link>
      </div>
      <div className="navBarLink">
        <Link to="/music">
          <PrimaryButton variant="textVariantA naked underlineHover">
            Music
          </PrimaryButton>
        </Link>
        <Link to="/theatre">
          <PrimaryButton
            variant="textVariantA naked underlineHover"
            cy="marketplaceNavbarItem"
          >
            Theatre
          </PrimaryButton>
        </Link>
        <Link to="/family">
          <PrimaryButton
            variant="textVariantA naked underlineHover"
            cy="marketplaceNavbarItem"
          >
            Family
          </PrimaryButton>
        </Link>
        <Link to="/support">
          <PrimaryButton
            variant="textVariantA naked underlineHover"
            cy="marketplaceNavbarItem"
          >
            Support
          </PrimaryButton>
        </Link>
      </div>
      <div className="navBarIconButtons">
        <Link to="/calendar">
          <img className="icon" src={CalendarIcon} alt="icon" />
        </Link>
        <Link to="/cart">
          <img className="icon" src={CartIcon} alt="icon" />
        </Link>
        <Link to="/user">
          <img className="icon" src={UserrIcon} alt="icon" />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
