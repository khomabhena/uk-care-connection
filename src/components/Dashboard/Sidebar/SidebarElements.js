import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 20%;
    background-color: var(--primaryDark);
    height: 100vh;

    @media screen and (max-width: 768px) {
        width: 15%;
    }
`