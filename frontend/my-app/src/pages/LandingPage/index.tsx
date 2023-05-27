import { useNavigate } from "react-router-dom"
import SearchComponent from "../../components/SearchComponent"
import "./style.scss"

const LandingPage = () => {
  const navigate = useNavigate()
  const searchOnSubmit = (searchInputElement: string) => {
    navigate(`/marketplace/products?s=${searchInputElement}`)
  }
  return (
    <div className="landingPage">
      <SearchComponent
        parentComponent="NavBar"
        onSubmit={searchOnSubmit}
        searchHistoryStorageKey="GlobalSearchHistory"
        autoCompleteDictionary={[]}
        placeholder={"Search for events"}
      />
    </div>
  )
}

export default LandingPage
