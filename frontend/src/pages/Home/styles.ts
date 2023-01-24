import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const ScoresContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export const ScoreWrapper = styled.div`
  width: 3rem; /* 48px */
  text-align: center;
`;

export const Score = styled.p`
  margin-bottom: .5rem;
  border: 1px solid ${props => props.theme["white-200"]};
  border-radius: 0.5rem;
  padding: .5rem;
`;

export const Modifier = styled.p`
  border-radius: 4px;
  padding: .5rem;
  font-weight: 700;
  text-align: center;
  background-color: ${props => props.theme.orange};
`;
