import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

export const JobWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${({active}) => (active ? `.5rem .5rem`: `1rem 1rem`)};
    background-color: ${({active}) => (active ? `var(--blue50)`: '')};
    border-radius: 8px;
    padding: ${({active}) => (active ? `1.5rem`: '0')};
    cursor: pointer;
    transition: .2s all ease-in-out;

    @media screen and (max-width: 912px) {
    }

    @media screen and (max-width: 480px) {
        margin: 1rem 0;
    }
`

export const Title = styled.h3`
    color: var(--grey500);
    font-size: 1rem;
`

export const CompanyName = styled.p`
    margin-top: 6px;
    color: var(--grey400);
    font-size: .7rem;
    text-transform: uppercase;
`

export const SalaryWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0;
    gap: 1rem;
`

export const Salary = styled.p`
    border-radius: 8px;
    color: var(--grey400);
    font-size: 0.9rem;
    letter-spacing: 1px;
`

export const Location = styled.p`
    border-radius: 8px;
    color: var(--grey400);
    font-size: 0.9rem;
    letter-spacing: 1px;
`

export const JobType = styled.p`
    border-radius: 8px;
    color: var(--blue500);
    font-weight: 700;
    font-size: .9rem;
`

export const JobDescription = styled.p`
    color: var(--grey500);
    font-size: 0.9rem;
    word-spacing: 2px;
    display: none;
`

export const HorizontalLine = styled.div`
    height: 1px;
    background: var(--grey300);
    margin: 1rem 1rem 0;
`

export const BottomWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const Date = styled.p`
    color: var(--grey400);
    font-weight: 500;
    font-size: 0.7rem;
    text-transform: capitalize;
    align-self: flex-end;
`

export const ApplyButton = styled.button`
    background: var(--green500);
    border: none;
    font-size: 1rem;
    padding: 0.3rem 1rem;
    border-radius: 12px;
    color: var(--grey50);
    cursor: pointer;
    display: none;

    :hover {
        background: var(--primaryDark);
        transform: scale(1.1);
    }
`