import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Topo = styled.div`
  width: 100px;
  height: 25px;
  background-color: #7aa944;
`;

export const Corpo = styled.div`
 width: 90px;
  height: 60px;
  background-color: #5c7e32;
`;

export const LacoHorizontal = styled.div`
  position: absolute;
  width: 15px;
  height: 85px;
  background-color: red;
`;

export const LacoVertical = styled.div`
  position: absolute;
  top: 40px;
  width: 90px;
  height: 15px;
  background-color: red;
`;

