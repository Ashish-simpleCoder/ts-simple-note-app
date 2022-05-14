import { CSSProperties, lazy, memo, MouseEvent, useCallback, useState } from "react";
import styled from "styled-components";
import Button from "../../Components/PureComponents/Button";
import H4 from "../../Components/PureComponents/Heading/H4";
import Para from "../../Components/PureComponents/P";
import Span from "../../Components/PureComponents/Span";
import Wrapper from "../../Components/PureComponents/Wrapper";
import { INote } from "../../Inote";
import useColorMenu from "../../Redux/hooks/useColorMenu";
import { setColorMenu } from "../../Redux/slices/color.menu.slice";
import useMediaQuery from "../../Utility/Hooks/useMediaQuery";
import If from "../../Utility/Utility Components/If";
import WithSuspense from "../../Utility/Utility Components/WithSuspense";
import Clr from "./Clr.icon";
const OverlayMenu = lazy(() => import('./Overlay.menu' /* webpackChunkName: 'Overlay menu' */))


export interface INoteCard {
    note: INote,
    styles?: CSSProperties,
    mode?: | 'note-page' | 'recycle-page'
}

const NoteCard = memo((props: INoteCard)=>{
    const {note, styles, mode = 'note-page'} = props

    const {color_menu, dispatch} = useColorMenu()
    const [isLargerThan750] = useMediaQuery({width: 750})
    const [isOverlayMenuVisibile, setIsOverlayMenuVisibile] = useState(false)


    const setOverlayMenuTrue = useCallback(() => isLargerThan750 && setIsOverlayMenuVisibile(true), [isLargerThan750])
    const setOverlayMenuFalse = useCallback(() => isLargerThan750 && setIsOverlayMenuVisibile(false), [isLargerThan750])


    const toggleColorMenu = useCallback((e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const {top, left} = e.currentTarget.getBoundingClientRect()
        dispatch(setColorMenu({
            enable: !color_menu.enable,
            item: {_id: note._id, bg: note.bg!},
            position:{top:top+20+'px', left:left+20+'px'}
        }))
    }, [])



    return(
        <StyledNote id={note._id} style={styles} className="note" onMouseEnter={setOverlayMenuTrue} onMouseLeave={setOverlayMenuFalse}>

            <Wrapper styles={{padding: '0.5rem 1rem',borderBottom:'1px solid var(--border)'}} >
                <Span cn='random-span' bg={true}/>
                <H4 styles={{width:'100%',margin: 0,textAlign:'center'}} cn='note-title'>{note.title}</H4>
            </Wrapper>

            <Wrapper styles={{overflow:'hidden',flex:'1', padding:'0.5rem 1rem'}}>
                <Para cn='note-body'>{note.body}</Para>
            </Wrapper>

            <If condition={!isLargerThan750 || isOverlayMenuVisibile}>
                <WithSuspense Comp={() =>(
                    <OverlayMenu cn={`note-overlay ${mode == 'recycle-page' ? 'recycle-overlay' : ""}`}>
                        <If condition={mode == 'note-page'}>
                            <Button style={{backgroundColor: 'transparent'}} onClick={toggleColorMenu}><Clr /></Button>
                            <Button mode='delete_note_btn' cn='note-delete-btn'>delete</Button>
                        </If>
                    </OverlayMenu>)
                }/>
            </If>
        </StyledNote>
    )
})
export default NoteCard



const StyledNote = styled.div`
    position:relative;
    width: 100%;
    height:20rem;
    box-shadow:0 0.2rem 0.2rem rgba(0,0,0,0.2);
    border-radius:0 0.5rem 0.5rem 0;
    display:flex;
    --direction: column;
    flex-direction: var(--direction);
    --note-menu-opacity:0;
    /* animation:animate_note calc(0.3s  * var(--note-order)) ease-in; */

    @media (min-width:700px){
        max-width:40rem;
    }


    p{
        opacity:0.9;
        white-space:pre-line;
        word-break:break-all;
        width:100%;
    }

    /* random span at the left top of the note */
    span.random-span{
        position:absolute;
        top:0;left:0;
        width:5rem;
        height:5rem;
        border-radius:50%;
        transform:translate(-50%, -50%);
    }

   span{
        pointer-events: none;
    }

    @media (max-width:700px){
        .overlay-menu{
            display:none;
        }
        /* for bin page */
        .bin-note-menu{
            display:flex;
        }
    }

    /* making the permanent delete and restore btn visible in bin page for every note */
    .bin-note-menu{
        --note-menu-opacity:1;
    }
    @media (min-width:700px){
        --note-menu-opacity:0;
        transition:all 0.3s;

        div.overlay-menu {
            height:4rem;
            width:100%;
            display:flex;
            opacity:var(--note-menu-opacity);
            pointer-events:none;
        }
        &:hover{
            --note-menu-opacity:1;
            div.overlay-menu{
                pointer-events:all;
            }
        }
    }

    @keyframes animate_note{
        0%{
            transform: scale(0.8);
            animation-timing-function: ease;
        }
        30%{
            animation-timing-function: ease-in;
            opacity: 1;
            transform: scale(1.1);
        }
        60%{
            animation-timing-function: ease-in;
            transform: scale(0.9);
        }
        100%{  }
}
`