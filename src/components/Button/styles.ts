import styled, { css } from 'styled-components'
import { darken, rgba } from 'polished';

interface ButtonProps {
  width?: number;
}
export const Button = styled.button<ButtonProps>`${({ theme: { colors }, width }) => css`
  width: ${width}%;
  max-width: 100%;
  padding: 24px;
  margin: 0;
  word-break: break-word;
  background-color: ${colors.green};
  color: ${colors.themeColors.background};
  /* box-shadow: 0px 6px 0px ${darken(0.08, colors.green)}; */
  border: none;
  border-radius: 50px;
  font-family: Roboto, sans-serif !important;
  text-transform: uppercase;

  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  /* line-height: 64px; */
  transition: 1s;

  animation: 1s infinite pulse;

  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 20px ${props => rgba(props.theme.colors.green, 0.2)};
    }
    100% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0 ${props => rgba(props.theme.colors.green, 0.2)}};
    }
  }
`}`