import styled from 'styled-components';
import { rgba } from 'polished'

import jogo3 from '../../assets/jogo3.png'

export const Container = styled.div`
  width: 100vw;
  height: 84vh;
  flex: 1;


  display: grid;
  grid-template-columns: 84vw 16vw;
  grid-template-rows: 100%;
  justify-content: flex-start;
  /* align-items: flex-start; */

  /* background-image: url(${jogo3}); */

  & > section {
    flex: 1;
    width: 100%;

    display: grid;
    justify-content: flex-start;
    align-items: flex-start;
  }

  & > section:nth-of-type(1) {
    flex: 1;
    padding: 0 30px 30px 30px;

    grid-template-columns: 100%;
    grid-template-rows: 7fr 3fr;
    justify-content: center;
    align-items: center;

    & > div {
  /* overflow-x: hidden; */
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content:flex-start;
      align-items: center;
      column-gap: 2rem;
    }
  }

  .highlights {
    padding-right: 1.4rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    row-gap: 1.2rem;

    .separator {
      font-weight: 900;
      margin-left: 1rem;

      &:before {
        position: absolute;
        content: "";
        width: .34rem;
        height: 1.4rem;

        margin-top: -0.1rem;
        margin-left: -1rem;
        
        background: ${props => props.theme.colors.themeColors.text};
        border-radius: 0.2rem 0.5rem 0.5rem 0.2rem;
      }
    }
  }
`;

export const Item = styled.div`
  width: 18rem;
  height: 12rem;
  padding: 0.6rem;

  /* background: ${rgba('#dddddd', 0.4)}; */
  /* backdrop-filter: blur(10px) opacity(60%); */
  border-radius: 10px;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    width: 18rem;
    height: 12rem;
    top: inherit;
    left: inherit;
    margin-top: -13%;
    margin-left: -.7%;

    background: ${rgba('#dddddd', 0.4)};
    backdrop-filter: blur(10px) opacity(60%);
    border-radius: 10px;

    z-index: -1;
  }
  
  img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
    object-fit: cover;


    &.reflect {
      height: 10%;
      object-fit: cover;

      filter: blur(10px);
      opacity: 0.6;

      -webkit-transform: scaleY(-1);
        -moz-transform: scaleY(-1);
          -ms-transform: scaleY(-1);
          -o-transform: scaleY(-1);
              transform: scaleY(-1); 
    }
  }

  h5 {
    margin-top: -6%;
  }
  .details {
    position: absolute;
    width: inherit;
    /* height: 20px; */
    margin-top: -5.6%;

    display: grid;
    grid-template-columns: 7fr 3fr;

    .tags {
      width: 100%;

      display: flex;
      justify-content: start;
      align-items: center;

      p {
        width: max-content;
        height: max-content;
        padding: .4rem;
        margin-left: .3rem;

        background: ${props =>  rgba(props.theme.colors.themeColors.background, 0.3)};
        backdrop-filter: blur(4px) opacity(99%);
        color: ${props => props.theme.colors.themeColors.background};
        border: 0.8px solid  ${props => rgba(props.theme.colors.themeColors.background, 0.4)};
        border-radius: 10px;

        font-size: .6rem;
        font-weight: 900;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        &:hover {
          background: ${props =>  rgba(props.theme.colors.themeColors.text, 0.5)};
        }
      }
    }
    .evaluation {
      width: 40px;
      height: 40px;
      margin-top: 34%;

      background: ${rgba('#dddddd', 0.4)};
      backdrop-filter: blur(10px) opacity(80%);
      color: ${props => props.theme.colors.themeColors.background};
      border-bottom: 2px solid  ${props => rgba(props.theme.colors.themeColors.background, 0.6)};
      border-radius: 10px;

      font-weight: 900;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-top: -100%;
        position: absolute;
      }

      p {
        padding: 2rem;
      }
    }
  }
`;


export const Card = styled.div`
  width: 100%;
  height: 5.4rem;
  padding: .2rem;
  padding-right: .4rem;

  background: ${props => rgba(props.theme.colors.themeColors.text, 0.1)};
  color: ${props => rgba(props.theme.colors.themeColors.text, 0.8)};
  border-radius: 0rem 1rem 1rem 0rem;

  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 100%;
  column-gap: 0.3rem;

  div {
    padding: 0.8rem;

    i {
      font-size: .6rem;
      margin-top: 1rem;
      color: ${props => rgba(props.theme.colors.themeColors.text, 0.6)};
    }

    &:before {
      content: "";
      position: absolute;
      width: 1.2rem;
      height: .16rem;
      /* margin-left: 0.2%; */
      margin-top: -0.5%;

      background: ${props => rgba(props.theme.colors.themeColors.text, 0.8)};
      border-radius: 50px;
    }
  }
  img {
    width: 100%;
    height: calc(100% - 0.1rem);

    border-radius : 0.6rem;
    object-fit: cover;
    object-position: center;
  }

`

export const TopGames = styled.ul`
  width: 100%;
  height: 100%;
  margin-left: 1rem;

  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.6rem;

  li {
    font-family: Roboto;
    font-size: 0.7rem;
    font-weight: 900;

    color:  ${props => rgba(props.theme.colors.themeColors.text, 0.4)};

    cursor: pointer;
    &:first-of-type{
      color:  ${props => rgba(props.theme.colors.themeColors.text, 0.8)};
    }

    label {
      margin-right: 0.5rem;
    }
  }

`