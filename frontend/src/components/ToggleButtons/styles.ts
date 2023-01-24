import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-top: 2rem;
`;

interface ButtonToggleProps {
  active: boolean;
}

export const ButtonToggle = styled.button<ButtonToggleProps>`
  border: 1px solid ${props => props.theme["white-200"]};
  border-radius: .5rem;
  padding: 1rem;
  transition: all .2s ease-out;

  ${({ active }) => active && css`
    border-color: ${props => props.theme["green-200"]};
    color: ${props => props.theme["white-200"]};
    background-color: ${props => props.theme["green-200"]};
  `}

  ${({ active }) => !active && css`
    &:hover {
      border-color: ${props => props.theme.green};
      color: ${props => props.theme.green};
      background-color: none;
    }
  `}
`;
