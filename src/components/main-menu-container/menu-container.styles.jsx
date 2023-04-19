import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 200px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5%;
  
   @media screen and (max-width:700px) {
      flex-direction: column;
      margin-top: unset;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      margin: 20px 0;
   }
   :last-child{
      margin-bottom: 50px;
   }
`;