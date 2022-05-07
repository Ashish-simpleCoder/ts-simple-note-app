import { CSSProperties, MemoExoticComponent } from "react"
import { NoteProps } from "../../Pages/Note/Note.card"

interface IMap {
    Element: | MemoExoticComponent<(props: any) => JSX.Element> | ( ({}:any ) => JSX.Element ),
    data: any, style?: CSSProperties, fn?: (note: INote) => boolean
}

const Map = (props: IMap) => {
    const {Element, data, style, fn} = props
    return(
        <>
        {
            data.map((d: any) => <Element {...d} style={{...style,display: fn && fn(d) ? 'flex' : 'none'}}/>)
        }
        </>
    )
}
export default Map