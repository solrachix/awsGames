import styled from 'styled-components';

export const Container = styled.div`
  min-width: 500px;
  min-height: 100px;
  padding: 1rem;
  margin-top: 10%;

  background: ${props => props.theme.colors.red};
  border-radius: 20px;


  div {
    width: 100%;
    margin-top: 4%;

    display: grid;
    grid-template-columns: 33% 33% 33%;

    i { 
      font-style: normal;
      color: #fff;
      text-align: center;

      display: flex;
      flex-direction: column;

      b {
        margin-bottom: -3%;

        font-size: 3rem;
        font-weight: 900;
      }
    }
  }
`;
