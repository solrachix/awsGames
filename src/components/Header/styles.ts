import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 30px 20px;

  display: grid;
  grid-template-columns: 1fr 7.6fr 1.4fr;

  img {
    width: 100%;
  }
  .navBar{
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .highlighter {
      width: 6rem;

      position: absolute;
      top: -1%;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 6rem;
        font-weight: 700;
        text-align: center;
        color: ${props => rgba(props.theme.colors.themeColors.text, 0.4)};
        cursor: pointer;

        transition: 1s;
        &.actived {
            color: ${props => props.theme.colors.themeColors.text};
        }
      }
    }

  }



  form {

    input {
      background: ${props => props.theme.colors.themeColors.background} url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
      border: solid 1px ${props => rgba(props.theme.colors.themeColors.text, 0.2)};
      padding: 9px 10px 9px 32px;
      width: 55px;
      
      border-radius: 0.8em;
      
      transition: all .5s;

      width: 15px;
      padding-left: 10px;
      cursor: pointer;

      &,
      &:-webkit-input-placeholder {
        color: transparent;
      }
      &:focus {
        width: 130px;
        padding-left: 32px;

        color: ${props => props.theme.colors.themeColors.text};
        /* border-color:${props => props.theme.colors.themeColors.primary}; */
        box-shadow: 0 0 5px rgba(109,207,246,.5);

        cursor: auto;
      }

      &:focus ~ &::-webkit-input-placeholder{
        color:  ${props => rgba(props.theme.colors.themeColors.text, 0.8)};
      }

      &:hover {
        background-color: #fff;
      }

    }

  }
`;
