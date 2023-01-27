import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: var(--grey600);
`

export const Navigation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    background-color: var(--grey700);
    z-index: 20;
    padding: 0 2rem;
    box-shadow: 1px 1px 2px var(--grey900);
`

export const MainContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    min-height: calc(100vh - 90px);
    padding: 70px 0;

`

export const Sidebar = styled.div`
    background-color: var(--grey700);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;
    height: calc(100vh - 70px);
`

export const PageContent = styled.div`
    background-color: var(--grey600);
    display: flex;
    justify-content: center;
`

export const HozWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const PageName = styled.p`
    color: var(--blue400);
    font-weight: 500;
`

export const Button = styled.button`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    background-color: var(--grey800);
    border: 1px solid transparent;
`

export const PageNumber = styled.p`
    color: var(--grey300);
    font-weight: 500;
`

export const SmallPage = styled.div`
    border: 4px solid var(--blue400);
    width: 120px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MainPage = styled.div`
    /* background-color: var(--blue50); */
    /* width: 80%; */
    display: flex;
    justify-content: center;
`