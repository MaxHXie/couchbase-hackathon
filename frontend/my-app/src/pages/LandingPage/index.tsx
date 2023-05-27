import { useNavigate } from "react-router-dom"
import SearchComponent from "../../components/SearchComponent"
import "./style.scss"
import EventCard from "../../components/EventCard"

const LandingPage = () => {
  const navigate = useNavigate()
  const searchOnSubmit = (searchInputElement: string) => {
    navigate(`/marketplace/products?s=${searchInputElement}`)
  }
  return (
    <div className="landingPage standardPaddingSection">
      <SearchComponent
        parentComponent="NavBar"
        onSubmit={searchOnSubmit}
        searchHistoryStorageKey="GlobalSearchHistory"
        autoCompleteDictionary={[]}
        placeholder={"Search for events"}
      />
      <div className="eventList">
        {Array.from(Array(10)).map((i) => (
          <EventCard />
        ))}
      </div>
    </div>
  )
}

export default LandingPage
