import "./style.scss"

export const Footer = () => {
  return (
    <footer className="standardPaddingSection">
      <div className={`upperHorizontalSection}`}></div>
      <div className="lowerHorizontalSection">
        <p>Blinket Group&copy;{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
