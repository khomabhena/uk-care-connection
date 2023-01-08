import styled from "styled-components"

export const Container = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 2px 2px 2px var(--grey300);

    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: calc(100vh - (90px + 3rem));
`