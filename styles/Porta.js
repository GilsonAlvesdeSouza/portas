import styled from 'styled-components';

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--area-porta-largura);
  height: var(--area-porta-altura);
  margin: 5px;
`;

export const Portal = styled.div`
  display: flex;
  flex-grow: 1;
  border-left: 5px solid brown;
  border-top: 5px solid brown;
  border-right: 5px solid brown;
  width: 90%;
`;

export const PortaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: chocolate;
  padding: 15px;
`;

export const Numero = styled.div`
  font-size: 3rem;
`;

export const Soleira = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;

`;