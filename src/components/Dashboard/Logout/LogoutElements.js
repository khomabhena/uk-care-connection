import styled from "styled-components";

export const Container = styled.button`
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    font-size: 1rem;
    border: 1px solid var(--grey200);
    margin-left: 2rem;
    color: var(--grey400);
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding: .3rem .5rem;
        margin-left: .5rem;
        font-size: .7rem;
    }
`