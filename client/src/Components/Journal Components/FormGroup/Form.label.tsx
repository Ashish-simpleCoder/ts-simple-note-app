import { memo } from "react"
type LabelProps = { text:string, focus?:string  }

const LabelField = (props:LabelProps)=> <label className={props.focus ? 'transform' : ''}>{props.text}</label>
export default memo(LabelField)



