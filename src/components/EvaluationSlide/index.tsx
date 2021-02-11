import React, { useState } from 'react'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { Container } from './styles'

interface Props {
  evaluation: {
    src: string
  }[]
}

interface ButtonProps {
  disabled: boolean
  onClick(e: any): void
}
const EvaluationSlide: React.FC<Props> = ({ evaluation }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })

  return (
    <Container>
      {/* {evaluation.map((props, index) => (
        <img key={index} src={props.src} alt="evaluation" />
      ))} */}
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {evaluation.map((props, index) => (
            <div
              key={index}
              className={`keen-slider__slide number-slide${index}`}
            >
              <img src={props.src} alt="evaluation" />
            </div>
          ))}
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={e => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={e => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            )
          })}
        </div>
      )}
    </Container>
  )
}

function ArrowLeft(props: ButtonProps) {
  const disabled = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left' + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props: ButtonProps) {
  const disabled = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right' + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}
export default EvaluationSlide
