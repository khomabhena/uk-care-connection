import styled from "styled-components";

export const Container = styled.div`
    display: ${({isOpen}) => (isOpen ? 'flex': 'none')};
    align-items: center;
    min-height: 50px;
    gap: 1rem;
    margin: .2rem .5rem;
    padding: 0 .8rem;
    transition: .3s all ease-in-out;
    background-color: ${({isActive}) => (isActive ? `var(--hover)` : 'transparent')};
    border-radius: 12px;
    cursor: pointer;

    :hover {
        border-radius: 12px;
        background-color: var(--hover);
    }

`

export const Icon = styled.div``

export const Name = styled.p`
    color: var(--blue100);
`