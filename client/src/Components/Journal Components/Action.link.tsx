import { ReactNode } from "react"
import styled from "styled-components"
import Button from "../PureComponents/Button"

const ActionLink = (props: {children: any, onClick: (e?: any) => void}) => {
    return <Button onClick={props.onClick} style={{backgroundColor:'red !important'}}>{props.children}</Button>
}
export default ActionLink