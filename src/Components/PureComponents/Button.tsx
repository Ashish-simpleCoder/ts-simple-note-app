import styled, { css } from "styled-components"

const Button = ({children, cn, onClick, mode, isDisabled}: PropType) => {
    return(
        <StyledButton className={cn} onClick={onClick} mode={mode} disabled={isDisabled}>
            {children}
        </StyledButton>
    )
}
export default Button



const StyledButton = styled.button<{mode?: BtnMode}>`
    font-size: clamp(1.6rem, 1.6rem, 1.6vw);
    text-decoration: none;
    /* color: var(--brand-clr-400); */
    padding: clamp(0.3rem, 0.4rem, 0.4vw) clamp(0.7rem, 0.9rem, 0.9vw);
    height: clamp(3.5rem, 4rem, 4vw);

    :disabled{
        background-color: #424242;
        cursor: not-allowed;
        border: none;
        /* color: ; */
        color: #979797;
    }

    /* border-radius: 0.5rem; */
    /* border:0.5px solid var(--brand-border-400); */
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