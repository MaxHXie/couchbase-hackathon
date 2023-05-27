import { Link, useNavigate } from "react-router-dom"
import "./style.scss"
import PrimaryButton from "../buttons/PrimaryButton"
import SiteIcon from "../../static/icons/siteIcon.svg"
import IconButton from "../buttons/IconButton"

const NavBar = () => {
  return (
    <nav className="standardPaddingSection">
      <Link to="/">
        <img className="icon" src={SiteIcon} alt="icon" />
      </Link>
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
            Theatre & Comedy
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
          <IconButton variant="textVariantA naked underlineHover">
            Calendar
          </IconButton>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
