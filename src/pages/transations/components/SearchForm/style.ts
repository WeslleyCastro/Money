import { styled } from "styled-components";

export const SearhFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder{
      color: ${props => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 0.85rem;

    border: 0;
    padding: 1rem;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid ${props => props.theme["secondary-300"]};
    color: ${props => props.theme["secondary-300"]};
    transition: 0.2s background-color;
    cursor: pointer;

    &:disabled{
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover{
      background-color: ${props => props.theme["secondary-500"]};
      border: 1px solid ${props => props.theme["secondary-500"]};
      color: ${props => props.theme.white};
    }
  }
`