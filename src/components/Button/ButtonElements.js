import styled from "styled-components";

export const Button = styled.button`
    padding: .5rem .5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: var(--blue100);
    cursor: pointer;
    background-color: ${({isRed}) => (isRed ? `var(--red500)`: `var(--green500)`)};

    &:hover {
        background-color: var(--primaryDark);
    }
`