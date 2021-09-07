import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: black;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  color: #555;
  font-size: 1.5rem;
`;

export const Value = styled.span`
  font-size: 6rem;
`;

export const Botoes = styled.div`
  display: flex;
`;

export const BotaoDecremento = styled.button`
  font-size: 2rem;
  color: white;
  background-color: darkred;
  margin-right: 10px;
  padding: 0px 10px 0px 10px;
`;
export const BotaoIncremento = styled.button`
  font-size: 2rem;
  color: white;
  background-color: darkblue;
`;