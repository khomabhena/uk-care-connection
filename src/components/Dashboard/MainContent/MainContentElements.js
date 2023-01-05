import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: ${({isOpen}) => (isOpen ? '20%': '0')};
    width: ${({isOpen}) => (isOpen ? '80%': '100%')};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--grey100);
    transition: .2s all ease-in-out;

    @media screen and (max-width: 768px) {
        left: ${({isOpen}) => (isOpen ? '30%': '0')};
        width: ${({isOpen}) => (isOpen ? '100%': '100%')};
    }

    @media screen and (max-width: 640px) {
    left: ${({isOpen}) => (isOpen ? '70%': '0')};
    width: ${({isOpen}) => (isOpen ? '100%': '100%')};
    }
`