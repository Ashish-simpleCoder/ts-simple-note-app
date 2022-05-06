import { lazy, memo, useState } from "react"
import styled from "styled-components";
import Button from "../../Components/PureComponents/Button";
import If from "../../Utility/Utility Components/If";
import WithSuspense from "../../Utility/Utility Components/WithSuspense";

const ValidationBox = lazy(() => import("./ValidationBox" /* webpackChunkName: 'ValidationBox' */))


const MiniValidationBox = ({validations}: {validations: {
    number: boolean;
    lowercase: boolean;
    capital: boolean;
    characters: boolean;
}
}) => {
    const [show, setShow] = useState(false)

    return(
        <StyledMiniValidationBox>
            {/* <button className='toggle' onClick={() => setShow(v => !v)}>i</button> */}
            <Button onClick={() => setShow(v => !v)}>i</Button>
            <If condition={show}>
                <WithSuspense Comp={() => <ValidationBox validations={validations!}/>} />
            </If>
        </StyledMiniValidationBox>

    )
}
export default memo(MiniValidationBox)

const StyledMiniValidationBox = styled.div`
    position: absolute;
    right: 0;
    top: -3.5rem;
    display: flex;
    flex-direction: column;
    svg{
        position: unset;
    }


    button{
        position: absolute;
        right: 0;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 1px solid;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }

    div{
        border-radius: 0.5rem;
        box-shadow: var(--form-shadow);
        background-color: var(--body-bg);
        z-index: 4;
        transform: translateY(3rem);
        width: 20rem;
        height: 20rem;
    }
    ul{
        padding: 0 2rem;
        gap: 1rem;
        margin-top: unset !important;
    }

    li{
        font-size: 1.2rem;
    }
    svg{
        width: 1.2rem;
        position: unset;
        /* top: 0; */
        transform: unset;
    }

`