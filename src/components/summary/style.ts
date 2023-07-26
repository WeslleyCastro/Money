import { css, styled } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem;
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 760px){
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr)
  }
`

interface SummaryBoxProps {
  variant?: "green";
}


export const SummaryBox = styled.div<SummaryBoxProps>`
  height: 137px;
  padding: 1.6rem 2rem;
  border-radius: 8px;
  background-color: ${props => props.theme["gray-600"]};

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.7rem;
    color: ${props => props.theme["gray-300"]}
  }

  strong{
    font-size: 2rem;
  }

  ${props => props.variant == "green" && css`
    background-color: ${props.theme["secondary-700"]};
  ` }
`