import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    /* background-color: ${({active}) => (active ? `var(--blue50)`: `transparent`)}; */
    border-radius: 8px;
    /* padding: .2rem; */
`

export const ContainerRight = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    background-color: ${({active}) => (active ? `var(--blue50)`: `transparent`)};
    border-radius: 8px;
    padding: ${({active}) => (active ? `.3rem 1rem` : '0')};
    transition: .2s all ease-in-out;
`

export const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
`

export const Wrap = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr;
    /* background-color: ${({active}) => (active ? `var(--blue50)`: `transparent`)}; */
`

export const HorizontalWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
`

export const Heading = styled.h3`
    color: var(--grey500);
    font-size: 1rem;
`

export const SubHeading = styled.p`
    color: var(--grey500);
    font-size: .9rem;
`

export const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background: var(--blue100);
    margin: 1.5rem 0 1rem;
`
