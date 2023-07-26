import { styled } from "styled-components";


export const HeaderContainer = styled.header`
  background-color: ${props => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem; 

`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  font-weight: bold;
  font-size: 1.56rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;

`

export const NewTransactionButton = styled.button`
  height: 50px;
  border-radius: 8px;
  color: ${props => props.theme.white}; 
  background-color: ${props => props.theme["secondary-500"]};
  font-weight: bold;
  border: 0;
  transition: .2s;
  padding: 0 1.25rem;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }
`