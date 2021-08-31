import styled from 'styled-components';

export const Area = styled.div`
  position: relative;
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
  border-left: 5px solid ${({selecionada}) => (selecionada) === true ? 'yellow' : 'brown'};
  border-top: 5px solid ${({selecionada}) => (selecionada) === true ? 'yellow' : 'brown'};
  border-right: 5px solid ${({selecionada}) => (selecionada) === true ? 'yellow' : 'brown'};
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

export const Macaneta = styled.div`
  position: absolute;
  align-self: flex-start;
  top: calc(0.50 * var(--area-porta-altura));
  height: 11px;
  width: 40px;
  border-radius: 10px;
  background-color: ${({selecionada}) => (selecionada) === true ? 'yellow' : 'brown'};
`;

export const Numero = styled.div`
  font-size: 3rem;
  color: ${({selecionada}) => (selecionada) === true ? 'yellow' : 'with'};
`;

export const Soleira = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
`;