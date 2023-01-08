import styled  from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: min-content;
    margin: 1rem 1rem 0;
    min-height: calc(100vh - (90px + 1rem));
    gap: 1rem;
    transition: 2s all ease-in-out;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

export const SubHeading = styled.h4`
    color: var(--grey500);
    height: max-content;
`