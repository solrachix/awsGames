import React, { useState, useEffect } from 'react';

import Text from '../Text'
import { Container } from './styles';

interface Props {
  initialMinute?: number;
  initialSeconds?: number;
}
const Timer: React.FC<Props> = (props) => {
  const {initialMinute = 0, initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
      let myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval)
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } 
      }, 1000)

      return ()=> {
        clearInterval(myInterval);
      };
    });
  

  return (
    <Container>
      <Text size={2} weight={900} color="#fff" align="center">OFERTA ENCERRA EM...</Text>
      <div>
        <i>
          <b>00</b>
          horas
        </i>
        <i>
          <b>{minutes === 0 ? '00' : minutes}</b>
          minutos
        </i>
        <i>
          <b>{seconds === 0 ? '00' : seconds}</b>
          segundos
        </i>
      </div>
    </Container>
  );
};

export default Timer;
