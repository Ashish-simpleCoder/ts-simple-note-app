import { CSSProperties, memo } from "react"

const Span = ({children, style, cn}: SpanPropType) => {
    return(
        <span style={style} className={cn}>{children}</span>
    )
}
export default memo(Span)

interface SpanPropType extends PropType {
    style?: CSSProperties,
    cn?: string
}