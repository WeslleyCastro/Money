import { styled } from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 1.5rem;
`

export const TransactionsList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 1.5rem;

  table{
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    min-width: 600px;
  }

  td{
    color: ${props => props.theme["gray-300"]};
    padding: 1.25rem 2rem;
    background-color: ${props => props.theme["gray-700"]};
    font-size: 0.8rem;
    
    &:first-child{
      border-top-left-radius: 6px;
      border-top-left-radius: 6px;

      width: 50%;
    }

    &:last-child{
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

`
interface PriceHighLightProps {
  variant: string
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${props => props.variant == "income" ? props.theme["secondary-300"] : props.theme["red-300"]}
`