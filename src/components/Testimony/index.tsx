import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { FaGamepad } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { useKeenSlider } from 'keen-slider/react'


// import QierPlayer from 'qier-player'

import VideoPlayer from '../VideoPlayer'
import Text from '../Text'
import { Container, Comment } from './styles'

interface Props {
  testimonies: {
    title: string;
    urlVideo: string;
    poster: string;
  }[]
}
const Testimony: React.FC<Props> = ({ testimonies }) => {
    const theme = useTheme().colors
  const [currentSlide, setCurrentSlide] = useState(0)
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged (s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })


  return (
    <Container>
      <div className="a">
        <div ref={ref} className="keen-slider">
          {
            testimonies.map((testimony, index) => {
              const videoJsOptions = {
                autoplay: false,
                controls: true,
                sources: [{
                  src: testimony.urlVideo,
                  type: 'video/mp4'
                }],
                responsive: true                    
                }
                
              return (
                <div key={index} className={`keen-slider__slide number-slide${index + 1}`}>
                  <div className="text-container">
                    <Text className="title" size={1} weight={700}>
                      {testimony.title}
                    </Text>
                  </div> 
                  {/* <QierPlayer
                      width={640}
                      height={320}
                      language="pt"
                      showVideoQuality={true}
                      themeColor={theme.themeColors.primary}
                      srcOrigin={testimony.urlVideo}
                  /> */}
                  <VideoPlayer
                    videoJsOptions={videoJsOptions}
                    width={640}
                    height={320}
                    poster={testimony.poster}
                  />
                </div>
              )}
            )
          }

        </div>
      </div>
        <div className="b">
        <div className="changeSlide">
          {slider && (
            <>
              {/* <div>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    slider.prev()
                  }}
                  className={currentSlide === 0 ? 'disabled' : ''}
                ><IoIosArrowBack /></button>

                <button
                  onClick={e => {
                    e.stopPropagation()
                    slider.next()
                  }}
                  className={currentSlide === slider.details().size - 1 ? 'disabled' : ''}
                ><IoIosArrowForward/></button>

              </div> */}

              <div>
                <i><FaGamepad /></i> As últimas análises
              </div>
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
            </>
          )}
        </div>
        </div>
    </Container>
  )
}

export default Testimony