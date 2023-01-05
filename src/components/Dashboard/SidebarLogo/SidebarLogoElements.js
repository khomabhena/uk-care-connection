import styled from "styled-components";

export const Logo = styled.img`
    width: 55px;
    height: 55px;
    object-fit: cover;
    margin: 2rem 1rem;
    display: ${({isOpen}) => (isOpen ? 'visible': 'none')};
    transition: 1s all ease-in-out;

    @media screen and (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`