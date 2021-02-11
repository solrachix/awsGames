import styled from 'styled-components'
import { rgba, darken, lighten } from 'polished'

export const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1168px;
  padding: 0 24px;
  margin: 100px auto;
  overflow: hidden;

  .QuestionTitle {
    font-size: 48px;
    line-height: 64px;
    font-weight: 900;
    margin-bottom: 2rem;

    b {
      font-weight: 900;
    }
  }
  .button {
    margin-top: 60px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 300px;
    float: right;
  }

  @media (max-width: 400px) {
    padding: 0px !important;

    .QuestionTitle {
      font-size: 48px;
      line-height: 40px;
    }
  }
`

export const Question = styled.div`
  width: 100%;
  margin-bottom: 4px;
  button {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 80px;
    padding: 20px 35px;
    font-size: 24px;
    @media (max-width: 960px) {
      font-size: 16px;
    }
    background-color: ${props =>
      darken(0.08, props.theme.colors.themeColors.primary)};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    transition: all 200ms;

    p strong {
      color: ${props => lighten(0.1, props.theme.colors.themeColors.primary)};
    }

    .span {
      color: ${props =>
        darken(0.06, props.theme.colors.themeColors.background)};
    }
    .question {
      color: ${props => props.theme.colors.themeColors.background};
      flex: 1;
      margin: 0 30px;
    }
    .icon {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      border: 2px solid
        ${props => lighten(0.1, props.theme.colors.themeColors.primary)};
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: ${props => props.theme.colors.themeColors.background};
      }
    }
  }
  .response {
    display: none;
    padding: 20px 10%;
    font-size: 16px;
    line-height: 30px;
    background-color: ${props => props.theme.colors.themeColors.background};
    color: ${props => rgba(props.theme.colors.themeColors.text, 0.8)};
    border-radius: 0 0 5px 5px;
  }
  &.selected {
    .response {
      display: block;
    }
  }

  @media (max-width: 400px) {
    button {
      padding: 0.6rem 1rem;

      .question {
        margin: 0 1rem;
      }
    }
  }
`
