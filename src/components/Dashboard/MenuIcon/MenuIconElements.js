import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;

    @media screen and (max-width: 640px) {
        width: 80px;
    }
`

export const Heading = styled.h2`
    margin-left: 1rem;
    color: var(--grey500);
    cursor: default;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        color: var(--grey400);
    }

    @media screen and (max-width: 640px) {
        visibility: collapse;
    }
`