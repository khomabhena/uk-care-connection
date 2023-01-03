import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    position: relative;
    display: grid;
    grid-template-columns: 20% 1fr;
    transition: .2s all ease-in-out;

    @media screen and (max-width: 768px) {
        grid-template-columns: 15% 1fr;
    }

    @media screen and (max-width: 460px) {
        grid-template-columns: 0% 1fr;
    }
`