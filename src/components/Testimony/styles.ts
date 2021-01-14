import styled from 'styled-components'

export const Container = styled.section`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  /* margin-top: 20px;  */
  /* display: flex; */
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto auto;
	grid-template-areas: 
	'a'
	'b';
	/* grid-template-columns: 3fr 7fr;
	grid-template-rows: 9fr 1fr;
	grid-template-areas: 
	'a b'
	'c c'; */
  justify-content: space-between;
  flex-direction: column-reverse;
  
  @media screen and (min-width: 60em) {
    /* margin-top: 260px; */
    /* flex-direction: row; */
  }
  


  .a {
		grid-area: a;
    width: 100%;
    .keen-slider, .keen-slider__slide {
      overflow: hidden;
      position: relative;
    }
    .keen-slider{
      display: flex;
      user-select: none;
      -webkit-touch-callout: none;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
      [class^="number-slide"],
      [class*=" number-slide"] {
        /* height: 300px; */
        /* max-height: 100vh; */
        font-size: 50px;
        font-weight: 500;
        background: transparent;
        color:${props => props.theme.colors.themeColors.text};
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        
      }

			.keen-slider__slide {

				width: 100%;
				display: grid;

				grid-template-columns: 4fr 6fr;
				grid-template-rows: 100%;
				column-gap: 4rem;
				
				.text-container {
					max-width: 100%;
					@media screen and (min-width: 60em) {
						max-width: 328px;
					}

					&:after {
						content: "";
						position: absolute;
						width: 1.8rem;
						height: .2rem;
						margin-left: 0.2%;
						margin-top: -13.5%;

						background: ${props => props.theme.colors.themeColors.primary};
						border-radius: 50px;
					}

					.title {
						margin-top: 4%;
						font-size: 18px;
						display: none;

						@media screen and (min-width: 60em) {
							font-size: 36px;
							display: block;
						}
					}
				}

			}

    }
  }
	.b {
		grid-area: b;
		width: 100%;

		.changeSlide{
      width: 100%;
      max-width: 100%;
      min-width: 0px;
      /* margin: 40px 0px 0px; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      /* button {
        width: 40px;
        height: 40px;
        margin-right: 8px;
        background-color: ${props => props.theme.colors.themeColors.primary};
        color: #fff;
        border-radius: 5px;
        border: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &.disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
      } */
      div {
        font-size: 1.2rem;
        font-weight: 900;
        
        color: ${props => props.theme.colors.themeColors.text};

        display: flex;
        justify-content: center;
        align-items: center;

        i {
          width: 2rem;
          height: 2rem;
          margin-right: 0.4rem;

          background: ${props => props.theme.colors.themeColors.text};
          border-radius: 0.6rem;

          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            font-size: 1rem;
            color: ${props => props.theme.colors.themeColors.background};
          }
        }
      }
      .dots {
        /* max-width: 160px; */
        margin-left: 0px;
        display: flex;
        align-items: center;
        @media screen and (min-width: 60em)  {
          /* margin-left: 64px; */
        }
        .dot {
          width: 8px;
          height: 8px;
          background-color: ${props => props.theme.colors.themeColors.tertiary};
          border: none;
          border-radius: 50%;
          
          transition: all 0.2s linear 0s;
          &:not(:last-child) {
            margin-right: 16px;
          }
          &.active{
            width: 24px;
            border-radius: 6px;
            background-color: ${props => props.theme.colors.themeColors.text};
          }
        }
      }
    }
	}
  
`

export const Comment = styled.div`
  min-width: auto !important;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  svg {
    width: 20px;
    height: 20px;
    margin-right: 32px;
    path {
      fill: ${props => props.theme.colors.themeColors.primary}
    }
    @media screen and (min-width: 40em) {
      width: 32px;
      height: 32px;
    }
  }
  div {
    font-size: 15px;
    line-height: 156%;
    width: 100%;
    max-width: 576px;
    @media screen and (min-width: 40em) {
      font-size: 16px;
    }
    
    p { 
      font-weight: normal;
    }
    
    p + p {
      font-weight: 700;
      margin-top: 24px;
      margin-bottom: 4px;
    }
    
    .name{
      color: ${props => props.theme.colors.themeColors.primary};
    }
    @media screen and (min-width: 60em) {
      p + p {
        margin-top: 32px;
        margin-bottom: 0;
      }
    }
  }
`