import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import PrimaryButton from "../../../components/buttons/primaryButton"
import SearchComponent from "../searchComponent"
import "./style.scss"

const NavBar = () => {
  const navigate = useNavigate()

  const searchOnSubmit = (searchInputElement: string) => {
    navigate(`/marketplace/products?s=${searchInputElement}`)
  }
  const navbarSearchRef = useRef<HTMLDivElement>(null)

  return (
    <>
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
        <div className="navBarIconBtns">
          <div className="navbarSearchDiv" ref={navbarSearchRef} tabIndex={0}>
            <SearchComponent
              parentComponent="NavBar"
              onSubmit={searchOnSubmit}
              searchHistoryStorageKey="GlobalSearchHistory"
              autoCompleteDictionary={dict}
              placeholder={t("navbar.searchbar_placeholder") as string}
            />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
