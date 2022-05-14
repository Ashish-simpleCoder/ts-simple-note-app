import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { CSSProperties, memo, ReactNode } from "react"
import styled, { css } from "styled-components"
import If from "../../Utility/Utility Components/If"
import Loader from "../Journal Components/Loader"

interface PropType {
    children?: JSX.Element | JSX.Element[] | string | ReactNode,
    cn?: string,
    onClick?:
    (() => Promise<void>) |
    (() => {
        type: ActionCreatorWithoutPayload<string>;
    } | void) |
    (() => { payload: undefined; type: string; }) |
    any,

    mode?: BtnMode,
    isDisabled?: boolean,
    loader?: boolean,
    style?: CSSProperties
}

const Button = (props: PropType) => {
    const {children, cn, onClick, mode, isDisabled, loader, style} = props


    return(
        <StyledButton className={cn} onClick={onClick} mode={mode} disabled={isDisabled} style={style}>
            <If condition={loader}> <Loader /> </If>
            <If condition={!loader}> {children} </If>
        </StyledButton>
    )
}
export default memo(Button)



const StyledButton = styled.button<{mode?: BtnMode}>`
    text-decoration: none;
    padding: clamp(0.3rem, 0.4rem, 0.4vw) clamp(0.7rem, 0.9rem, 0.9vw);
    display: grid;
    place-items: center;

    :disabled{
        background-color: #424242;
        cursor: not-allowed;
        border: none;
        /* color: ; */
        color: #979797;
        /* width: 100%; */
    }


    transition: background 0.3s;
    background-color: var(--body-bg);   // for theme-toggling button
    cursor: pointer;
    border: none;



    ${(props)=>{
        switch(props.mode){
            case "hero_btn": return css`
                padding:1rem 3rem;
                /* height:unset; */
                display:flex;
                /* align-items:center;    //making text vertically center */
                margin-top:3rem;
                background-color: var(--brand);
                font-weight:600;
                box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
                color: white;
                box-shadow: var(--btn-shadow);
            `

            // case 'delete_note_btn': return css`
            //     width:3rem;
            //     display:flex;
            //     align-items:center;
            //     justify-content:center;
            //     &::before{
            //         content:'';
            //         position:absolute;

            //         background-image:${props.loader ? '' : 'url("./imgs/trash.png")'};
            //         background-repeat:no-repeat;
            //         width:100%;
            //         height:100%;
            //         display:flex;
            //         z-index:1;
            //     }
            // `
            case 'toggle-nav-btn': return css`
                margin-inline-start: auto;
                z-index: 6;
            `

            case 'create_note_btn': return css`
                background:var(--success-400);
                /* color:hsl(0, 0%, 90%); */
                /* box-shadow:0 0.2rem 0.2rem rgba(0, 0, 0, 0.3); */
            `
            case 'logout_btn': return css`
                height:unset;
            `
            case 'login_form_btn': return css`
                width:100%;
                position: relative;
                z-index: 2;
                background-color: green;
                color: white;
                border: none;
                height: 4rem;
                /* &:before{
                    content: '';
                    position:absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 0px;
                    transition: all 0.3s;
                }
                &:hover{
                    color: white;
                }
                &:hover::before{
                    width: 100%;
                    background-color: var(--brand);
                    z-index: -1;
                } */
            `
        }
    }}
`