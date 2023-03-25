import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 15%;
  
   @media screen and (max-width:700px) {
      flex-direction: column;
      margin-top: unset;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      margin: 20px 0;
   }
`;