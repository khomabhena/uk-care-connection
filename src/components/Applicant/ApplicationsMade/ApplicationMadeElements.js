import styled from "styled-components"

export const Container = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 2px 2px 2px var(--grey300);

    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: calc(100vh - (90px + 3rem));

    /* &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 8px;
        height: 8px;
        border:1px solid var(--blue400);
        border-radius: 8px;
    }

    &::-webkit-scrollbar-track-piece {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border:1px solid black;
        background-color: red;
     } */
`