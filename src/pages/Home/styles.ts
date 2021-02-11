import styled from 'styled-components';
import { rgba } from 'polished'

export const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  flex: 1;


  /* display: grid;
  grid-template-columns: 84vw 16vw;
  grid-template-rows: 100%;
  justify-content: flex-start; */
  /* align-items: flex-start; */

  .react-reveal {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .message {
    width: 100%;
    height: fit-content;
    padding: 0.5rem 0.5em;
    
    font-weight: 700;

    background: ${props => props.theme.colors.green};
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  section {
    flex: 1;
    width: 100%;
    max-width: 100vw;
    height: fit-content;
    padding: 30px 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:nth-of-type(1) {
      padding: 30px 200px;
    }

    &.primary {
      background: ${props => props.theme.colors.themeColors.primary}
    }


    .title {
      margin-bottom: 4rem;
    }

    .button {
      width: 60%;
    }

    .compraSegura {
      font-style: italic;
    }

    .medias {
      width: 80%;
      margin: 4% 0px 6% 0px;
      display: flex;
      column-gap: 1rem;
      justify-content: space-around;

      img {
        width: 10rem;
      }
    }

    .depositions {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      column-gap: 2rem;
      row-gap: 2rem;

      img {
        width: 16rem;
      }
    }

    .bonus {
      width: 16rem;
      text-align: center;

      p:nth-of-type(1) {
        font-style: oblique;
      }

      img {
        width: 100%;
      }
    }

    &.ebookSection {
      padding: 50px 20px;

      .ourEbook {
        width: 100%;

        display: grid;
        grid-template-columns: 46vw 54vw;
        grid-template-rows: 100%;
        justify-content: flex-start;
        align-items: flex-start;

        img {
          width: 100%;
          height: 600px;
        }
        & > div {
          width: 80%;

          display: flex;
          flex-direction: column;
          justify-content: center;

          button {
            width: 80%;
            margin: 5% auto;
          }
        }
      }
    }

    .purchase {
      width: 80%;
      height: fit-content;
      padding: 2rem;

      border-radius: 20px;
      background: ${props => props.theme.colors.themeColors.background};
      box-shadow: 0px 0px 20px ${props => props.theme.colors.themeColors.background};

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .warranty {
      width: 100%;
      max-width: 900px;
      margin-top: 10%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      row-gap: 6vw;

      img {
        width: 32%;
        height: 32%;
        margin-bottom: -10%;

        /* height: 600px; */
      }
      p {
        width: 60%;
      }
    }
  }

  /* & > section:nth-of-type(1) {
    flex: 1;
    padding: 0 30px 30px 30px;

    grid-template-columns: 100%;
    grid-template-rows: 7fr 3fr;
    justify-content: center;
    align-items: center;

    & > div {
  /* overflow-x: hidden; 
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content:flex-start;
      align-items: center;
      column-gap: 2rem;
    }
  } */

  @media(max-width: 800px) {
    /* background: red; */
    max-width: 100%;

    section {
      padding: 30px 30px;

      &:nth-of-type(1) {
        padding: 30px 30px;
      }

      .button {
        width: 80%;
        font-size: 1.4rem;
      }

      &.ebookSection {
        padding: 50px 20px;

        .ourEbook {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 100%;
            height: 600px;
            margin-bottom: 2rem;
          }
          p {
            width: 80%;
            font-size: 1.6rem;
            text-align: center;
          }
        }
      }

      .warranty{
        width: 100%;
        max-width: 900px;
        margin-top: 20%;

        display: flex;
        flex-direction: column;
        align-items: center;

        row-gap: 6vw;

        img {
          width: 60%;
          height: 60%;
        }
        /* div { */
          p {
            margin: auto;
            width: 80%;

            &:nth-last-of-type() {
              font-size: 1.6rem;
            }
          }


        /* } */
      }
    }
  }

  @media(max-width: 600px) {
    /* background: red; */
    max-width: 100%;

    section {
      padding: 30px 30px;

      &:nth-of-type(1) {
        /* min-height: 100vh; */
        padding: 30px 10px;

        video, .vjs-poster, .video-js {
          width: 90vw;
          height: 50vw;
        }

        .button {          
          width: 96%;
        }

        .pagamento {
          width: 90%;
        }
      }
      &:nth-of-type(6) {
        p {
          font-size: 2.4rem;
        }
      }

      .title {
        font-size: 1.8rem;
        margin-bottom: 4rem;
      }

      .button {
        width: 100%;
        font-size: 1.2rem;
        padding: 20px;
      }

      .pagamento {
        width: 100%;
      }

      &.ebookSection {
        padding: 50px 20px;

        .ourEbook {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 100%;
            height: 100%;
            margin-bottom: 2rem;
          }
          p {
            width: 100%;
            font-size: 1.2rem;
            text-align: center;
          }
        }
      }

      .depositions {
        width: 110%;
        margin: 20px 0px; 
        column-gap: 1rem;
        row-gap: 20px;

        p:nth-of-type(1) {
          font-size: 1.4rem;
        }
        p:nth-of-type(2) {
          font-size: 1.2rem;
        }
        img {
          width: 10rem;
          /* width: 16rem; */
        }
      }

      &.mediasSection {
        text-align: center;
        /* display: flex; */

        p {
          text-align: center;
        }
        .medias {
          /* width: 100%; */
          margin: 20px auto;
          
          justify-content: space-between;
          row-gap: 2rem;
          /* flex-direction: column; */
          img {
            width: 4rem;
            height: 3.4rem;
          }
        }
      }

      .purchase {
        width: 110%;
        padding: 1rem;

        img {
          width: 50%;
        }

        .pagamento + p {
          font-size: 1rem;
        }

        p {
          font-size: 1.4rem;
        }
        
        p:nth-of-type(1) {
          font-size: 2rem;
        }
      }

      .warranty {
        img {
          width: 80%;
          height: 80%;
        }
        p {
          width: 100%;
          margin: auto;

          &:nth-of-type(1) {
            font-size: 2rem;
          }

          &:nth-last-of-type() {
            font-size: 1.6rem;
          }
        }

      }
    }
  }
`;
