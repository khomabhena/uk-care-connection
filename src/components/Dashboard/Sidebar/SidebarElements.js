import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: ${({isOpen}) => (isOpen ? '20%': '0')};
    background-color: var(--primaryDark);
    height: 100vh;
    transition: .2s all ease-in-out;
    z-index: 9;
    
    @media screen and (max-width: 768px) {
        width: ${({isOpen}) => (isOpen ? '40%': '15%')};
    }

    @media screen and (max-width: 640px) {
        width: ${({isOpen}) => (isOpen ? '70%': '0')};
    }
`