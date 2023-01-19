import styled from "styled-components";

export const JobWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    margin: 6px;
    background-color: ${({selected}) => (selected ? `var(--blue50)`: '')};
    border-radius: 8px;
    cursor: pointer;

    @media screen and (max-width: 912px) {
    }

    @media screen and (max-width: 480px) {
        margin: 1rem 0;
    }
`

export const HorizontalWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 20px;
`

export const Heading = styled.h3`
    color: var(--grey500);
    font-size: .9rem;
`

export const SubHeading = styled.p`
    margin-top: 6px;
    color: var(--grey400);
    font-size: .6rem;
    text-transform: uppercase;
`

export const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background: var(--grey300);
    margin: 1rem 0 1rem;
`

