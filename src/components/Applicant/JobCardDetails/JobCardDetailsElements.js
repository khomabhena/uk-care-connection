import styled from "styled-components";

export const JobDetailsWrapper = styled.div`
    position: relative;
    border-radius: 8px;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-self: center;
`

export const TitleWrap = styled.div``

export const UpperWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    color: var(--grey500);

    @media screen and (max-width: 480px) {
        font-size: 1.1rem;
    }
`

export const CompanyName = styled.p`
    color: var(--grey400);
    text-transform: capitalize;

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
    }
`

export const TopContainer = styled.div`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

export const TopWrap = styled.div`
    border: 1px solid var(--blue400);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin: 0 1rem 1.5rem 0;

    @media screen and (max-width: 912px) {
        margin: 0 0 0.5rem 0;
    }

`

export const TopTitle = styled.p`
    color: var(--grey400);
`

export const BottomTitle = styled.h4`
    color: var(--grey600);
`

export const Heading = styled.h3`
    color: var(--grey500);
`

export const Text = styled.p`
    color: var(--grey500);
    margin-bottom: 2rem;
`

export const ButtonBack = styled.button`
    position: absolute;
    padding: 0.5rem 1rem;
    align-self: flex-end;
    border-radius: 8px;
    border: none;
    background: var(--iconAlpha);
    color: var(--greyDark);
    font-weight: 700;
    cursor: pointer;
    top: 2rem;
    right: 2rem;

    @media screen and (max-width: 480px) {
        top: 1rem;
        right: 1rem;
        font-weight: 500;
        padding: 0.5rem 0.5rem;
    }
`

export const ApplyButton = styled.button`
    background: var(--primary);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: var(--primaryWhite);
    font-size: 1.1rem;
    cursor: pointer;

    :hover {
        background: var(--primaryDark);
    }
`