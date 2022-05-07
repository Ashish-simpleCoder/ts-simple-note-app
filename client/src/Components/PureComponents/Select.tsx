import styled from "styled-components"

const Select = () => {
    return(
        <StyledSelect >
            <option value="login" selected>Login</option>
            <option value="Signup">Signup</option>
        </StyledSelect>
    )
}
export default Select

const StyledSelect = styled.div`
    /* background-color: var(--brand); */
    background-color: white;
    border: none;
    border-radius: 0.5rem;
    padding: clamp(0.5rem, 0.8rem, 0.8vw);
    cursor: pointer;
    option{
    }

    option:hover{
        /* background-color: var(--hover-bg); */
    }
`