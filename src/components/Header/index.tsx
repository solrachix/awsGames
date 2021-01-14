import React, { useRef, useEffect, useState } from 'react'

import Logo from '../../assets/logo.png'
import highlighter from '../../assets/highlighter.svg'
import { Container } from './styles';

const Tabs = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Store',
    to: '/Store'
  },
  {
    name: 'Blog',
    to: '/Blog'
  },
  {
    name: 'Gallery',
    to: '/Gallery'
  },
  {
    name: 'Reviews',
    to: '/Reviews'
  }
]
const Header: React.FC = () => {
  const highlighterRef = useRef<HTMLImageElement>(null)
  const [openTab, setOpenTab] = useState(0)

  useEffect(() => {
    const navbar = document.querySelector('.navBar ul')
    const highlighter = highlighterRef.current

    goToTab(0)
    if (highlighter) {
        highlighter.animate({
            top: ['-60%', '-1%']
          }, {
            duration: 400, // number in ms [this would be equiv of your speed].
            easing: 'ease-in',
            iterations: 1 // infinity or a number.
            // fill: ''
          })
    
          highlighter.style.top = '-1%'
    }

  }, [])

  const goToTab = (id: number) => {
    const highlighter = highlighterRef.current
    const navbar = document.querySelector('.navBar ul')
    
    
    if (highlighter && navbar) {
        const moveToPX = (id: number) => (navbar.children[id] as HTMLUnknownElement).offsetLeft
        const Tab = navbar.children[id]

        highlighter.animate({
					left: [
						`${moveToPX(openTab)}px`,
						`${moveToPX(id) + 30}px`,
						`${moveToPX(id) - 30}px`
					]
          }, {
            duration: 1000, // number in ms [this would be equiv of your speed].
            easing: 'ease-in',
            iterations: 1 // infinity or a number.
            // fill: ''
          })
					highlighter.style.left = `${moveToPX(id)}px`
					
					setOpenTab(id)
    }


    // Array(navbar?.children || []).map(child => {
    //     const selected = child.id.split('-')
    // })
  }

  return (
    <Container>
        <img src={Logo} />

        <nav className="navBar">
					<img 
						ref={highlighterRef}
						className="highlighter"
						src={highlighter}
					/>

					<ul>
					{/* <li className="actived">Home</li> */}
					{
						Tabs.map((props, index) => (
							<li key={props.to}
								id={`tab-${index}`}
								className={openTab === index ? 'actived' : ''}
								onClick={() => goToTab(index)}
							>{props.name}</li>
						))
					}
					</ul>

        </nav>

        <form>
          <input type="search" placeholder="Search" />
        </form>

    </Container>
  )
}

export default Header
