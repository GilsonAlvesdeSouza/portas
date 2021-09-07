import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Portas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: stretch;
`;

export const Botoes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Btn = styled.button`
  background-color: #c0392c;
  color: white;
  font-size: 2rem;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;

  :hover {
    cursor: pointer;
    background-color: #c0562c;
  }
`;