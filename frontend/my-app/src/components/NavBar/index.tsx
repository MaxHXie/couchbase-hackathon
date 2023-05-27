import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./style.scss"
import PrimaryButton from "../buttons/PrimaryButton"
import SearchComponent from "../SearchComponent"

const NavBar = () => {
  const navigate = useNavigate()

  const searchOnSubmit = (searchInputElement: string) => {}
  const navbarSearchRef = useRef<HTMLDivElement>(null)

  return (
    <nav className="standardPaddingSection">
      <div className="navBarLeftItems">
        <Link to="/">
          <PrimaryButton variant="textVariantA naked underlineHover">
            Blinket
          </PrimaryButton>
        </Link>
        <div className="navBarLink">
          <>
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
          </>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
