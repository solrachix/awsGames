import React, { useRef, useEffect, useState } from 'react';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'

import 'video.js/dist/video-js.css';
import { Container } from './styles'

interface Props {
  videoJsOptions: VideoJsPlayerOptions;
  width: number;
  height: number;
  poster: string;
}
const VideoPlayer: React.FC<Props> = ({ videoJsOptions, width = 720, height = 440, poster}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [player, setPlayer] = useState<VideoJsPlayer | null>(null)

  useEffect(() => {
    const videoNode = videoRef.current

    if(videoNode) {
      setPlayer(videojs(videoNode, videoJsOptions, function onPlayerReady(this: unknown) {
        console.log('onPlayerReady', this)
      }))
    }

    return () => {
      if (player) {
        player.dispose()
      }
    }
  }, [])

  return (
    <Container>	
      {/* <div data-vjs-player> */}
        <video ref={videoRef} 
        id="my_video_1" 
        className="video-js vjs-default-skin" 
        preload="none"
        {...{width, height, poster}}
      ></video>
      {/* </div> */}
    </Container>
  )
}

export default VideoPlayer
// export default class VideoPlayer extends React.Component {
//   componentDidMount() {
//     // instantiate Video.js
//     this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
//       console.log('onPlayerReady', this)
//     });
//   }

//   // destroy player on unmount
//   componentWillUnmount() {
//     if (this.player) {
//       this.player.dispose()
//     }
//   }

//   // wrap the player in a div with a `data-vjs-player` attribute
//   // so videojs won't create additional wrapper in the DOM
//   // see https://github.com/videojs/video.js/pull/3856
//   render() {
//     return (
//       <div>	
//         <div data-vjs-player>
//           <video ref={ node => this.videoNode = node } className="video-js"></video>
//         </div>
//       </div>
//     )
//   }
// }