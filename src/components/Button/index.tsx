import React from 'react'

import { Button } from './styles'

interface ComponentProps {
  width?: number;
  themeColor?: string; 
  // onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const ButtonComponent: React.FC<ComponentProps> = ({ children, ...props }) => {
  return <Button className="button" {...props}>{ children }</Button>
}

ButtonComponent.defaultProps = {
  width: 100,
  themeColor: 'primary'
}

export default ButtonComponent