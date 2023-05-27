import React from "react"
import "./style.scss"
import EventImage from "../../static/icons/eventImg.png"
const EventCard = () => {
  return (
    <div className="cardContainer">
      <div className="title"></div>
      <div className="image">
        <img src={EventImage} alt="" />
      </div>
      <div className="titleAndState">
        <div className="dateTime">Date and Time</div>
        <div className="availability">Ticket Available</div>
      </div>
    </div>
  )
}

export default EventCard
