import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 20%;
    width: 80%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--grey100);

    @media screen and (max-width: 768px) {
        left: 15%;
        width: 85%;
    }

    @media screen and (max-width: 640px) {
        left: 0;
        width: 100%;
    }
`