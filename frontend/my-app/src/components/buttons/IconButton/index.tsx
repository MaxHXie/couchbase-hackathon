import React, { CSSProperties, MouseEventHandler } from "react"
import "./style.scss"

export type Ref = HTMLButtonElement

export interface Props {
  className?: string
  variant?: string
  children?: React.ReactNode
  inlineStyles?: CSSProperties
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  cy?: string
}

const IconButton = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <button
      className={`iconButton ${
        props.isLoading ? "animationWhileLoadingContentSubtle" : ""
      } ${props.variant ? props.variant : ""} ${
        props.className ? props.className : ""
      }`}
      style={{ ...(props.inlineStyles ? props.inlineStyles : {}) }}
      disabled={props.isDisabled || props.isLoading}
      onClick={props.onClick}
      ref={ref}
      data-cy={props.cy}
    >
      {props.children}
    </button>
  )
})

export default IconButton
