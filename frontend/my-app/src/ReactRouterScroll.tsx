import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const ReactRouterScroll = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    const rootComponent = document.querySelector(".pageContent")
    rootComponent && rootComponent.scrollIntoView(true)
  }, [pathname])

  return null
}

export default ReactRouterScroll
