import { Link, useNavigate } from "react-router-dom"
import "./style.scss"
import PrimaryButton from "../buttons/PrimaryButton"
import SiteIcon from "../../static/icons/siteIcon.svg"

const NavBar = () => {
  return (
    <nav className="standardPaddingSection">
      <Link to="/">
        <img src={SiteIcon} alt="icon" />
      </Link>
      <div className="navBarLink">
        <Link to="/">
          <PrimaryButton variant="textVariantA naked underlineHover">
            Home
          </PrimaryButton>
        </Link>
        <Link to="/events">
          <PrimaryButton
            variant="textVariantA naked underlineHover"
            cy="marketplaceNavbarItem"
          >
            Events
          </PrimaryButton>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
