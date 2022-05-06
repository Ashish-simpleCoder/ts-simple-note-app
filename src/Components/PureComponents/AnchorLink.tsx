import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { CSSProperties } from "styled-components";

type AnchorProps = {text?:string, path:string, styles?:CSSProperties, children?:ReactNode}

const AnchorLink = memo(({text, path, styles, children} : AnchorProps)=>{
    return <Link to={path} style={styles}>
        {text && text}
        {children && children}
    </Link>
})
export default AnchorLink

