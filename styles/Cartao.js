import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  color: white;
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'white'};
  margin: 3px;
  font-size: 2rem;
  padding: 20px;
`;