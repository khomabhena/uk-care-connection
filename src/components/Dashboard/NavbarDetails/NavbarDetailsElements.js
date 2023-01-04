import styled from "styled-components";
 
export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Image = styled.img`
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
        height: 45px;
        width: 45px;
    }
`

export const Name = styled.h4`
    color: var(--grey500);

    @media screen and (max-width: 768px) {
        color: var(--grey500);
        font-size: .9rem;
    }
`