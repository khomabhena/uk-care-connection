import styled from "styled-components";

export const JobWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem;
    border: 1px solid var(--grey300);
    background-color: ${({selected}) => (selected ? `var(--blue50)`: '')};
    /* border-left: 0;
    border-right: 0; */
    border-radius: 8px;
    padding: 1.5rem;
    cursor: pointer;

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
    margin: 1.5rem 0;
`

export const Salary = styled.p`
    background: var(--blue100);
    padding: 0.3rem 0.5rem;
    border-radius: 8px;
    color: var(--primary);
    font-weight: 500;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 1px;
`

export const JobType = styled.p`
    background: var(--blue500);
    padding: 0.5rem 0.5rem;
    border-radius: 8px;
    color: var(--grey50);
    font-weight: 700;
    font-size: .9rem;
`

export const JobDescription = styled.p`
    color: var(--grey500);
    font-size: 0.9rem;
    word-spacing: 2px;
    
`

export const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background: var(--grey300);
    margin: 2rem 0 1rem;
`

export const BottomWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Date = styled.p`
    color: var(--grey500);
    font-weight: 500;
    align-self: center;
    font-size: 0.8rem;
    text-transform: capitalize;
`

export const ApplyButton = styled.button`
    background: var(--green500);
    border: none;
    font-size: 1rem;
    padding: 0.3rem 1rem;
    border-radius: 12px;
    color: var(--grey50);
    cursor: pointer;

    :hover {
        background: var(--primaryDark);
        transform: scale(1.1);
    }
`