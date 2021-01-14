import React from 'react'
import { FaStar } from 'react-icons/fa'

import video1 from '../../assets/video1.mp4'
import videoBackground1 from '../../assets/video-background.png'
import jogo1 from '../../assets/jogo1.jpg'
import jogo2 from '../../assets/jogo2.jpg'
import jogo3 from '../../assets/jogo3-1.jpg'
import cyberpunk from '../../assets/cyberpunk.png'
import Testimony from '../../components/Testimony'

import Text from '../../components/Text'
import { Container, Item, Card, TopGames } from './styles';

const games = [
  {
    url: jogo1,
    title: "FreeFire",
    evaluation: "8,0",
    tags: [
      "PC",
      "PS5"
    ]
  },
   {
    url: jogo2,
    title: "Assassin's Creed: Valhalla",
    evaluation: "8,0",
    tags: [
      "PC",
      "PS5"
    ]
  },
  {
    url: jogo3,
    title: "The Las Of US 2",
    evaluation: "10,0",
    tags: [
      "PC",
      "PS5"
    ]
  }
]

const teste = [
  {
    "title": "Pré-encomende o Cyberpunk 2077 agora mesmo",
    "urlVideo": video1,
    'poster': videoBackground1
  },
  {
    "title": "Pré-encomende o Cyberpunk 2077 agora mesmo",
    "urlVideo": video1,
    'poster': videoBackground1
  },
  {
    "title": "Pré-encomende o Cyberpunk 2077 agora mesmo",
    "urlVideo": video1,
    'poster': videoBackground1 
  }
]

const RecentNews = [
  {
    title: "Cyberpunk 2077 tem evento de cosplay em 25 de novembro",
    date: "20/12/2020",
    imageUrl: cyberpunk
  },
  {
    title: "Cyberpunk 2077 tem evento de cosplay em 25 de novembro",
    date: "20/12/2020",
    imageUrl: cyberpunk
  },
  {
    title: "Cyberpunk 2077 tem evento de cosplay em 25 de novembro",
    date: "20/12/2020",
    imageUrl: cyberpunk
  }
]
const Home: React.FC = () => {


  return (
    <Container>
      <section>
        <div>
          <Testimony testimonies={teste} />
        </div>

        <div>
          {
            games.map((item, index) => (
            <Item key={`${item.title}-${index}`}>
              <img src={item.url} /><br />
              <img src={item.url} className="reflect" />

              <div className="details">
                <div className="tags">
                  {
                    item.tags.map(tagName => <p key={tagName} >{tagName}</p>)
                  }
                </div>

                <div className="evaluation">
                  <FaStar size={12} /> 
                  <p>{item.evaluation}</p>
                </div>
              </div>

              <h5>{item.title}</h5>
            </Item>
            ))
          }
        </div>
        
      </section>
      <section className="highlights">
        <h4 className="separator">Recent News</h4>

        {
          RecentNews.map((newNotice, index) => (
            <Card key={index}>
              <div>
                <Text className="title" size={0.7} weight={900}>
                  {newNotice.title}
                  <br />
                  <i>{newNotice.date}</i>
                </Text>
              </div>

              <img src={newNotice.imageUrl} />
            </Card>
          ))
        }
        
        <h4 className="separator">Top games</h4>

        <TopGames>
          <li>
            <label>1</label>
            Assassin's Creed Valhalla            
          </li>
          <li>
            <label>2</label>
            Spider-Man Miles Morales
          </li>
          <li>
            <label>3</label>
            Yakuza: Like a Dragon
          </li>
          <li>
            <label>4</label>
            Ghostrunner
          </li>
          <li>
            <label>5</label>
            FIFA 21: Ultimate 
          </li>
          <li>
            <label>7</label>
            The Falconeer
          </li>
          <li>
            <label>8</label>
            Watch Dogs Legion
          </li>
          <li>
            <label>9</label>
            DiRT 5
          </li>
        </TopGames>
      </section>
    </Container>
  )
}

export default Home
