import React from 'react'
import Slide from 'react-reveal/Slide'
import { useTheme } from 'styled-components';

import VideoPlayer from '../../components/VideoPlayer'
import Button from '../../components/Button'
import Text from '../../components/Text'
import { Container } from './styles';

import video from '../../assets/video1.mp4'
import videoBackground from '../../assets/video-background.png'
import QuestionsFrequent from './../../components/QuestionsFrequent/index';
import Timer from './../../components/Timer/index';

const teste = {
  "title": "Pré-encomende o Cyberpunk 2077 agora mesmo",
  "urlVideo": video,
  'poster': videoBackground
}

const depositions = [
  {
    src: 'https://guiadoscore7dias.com/wp-content/uploads/2020/10/DEP2-598x1024.png'
  },
  {
    src: 'https://guiadoscore7dias.com/wp-content/uploads/2020/10/DEP2-598x1024.png'
  },
  {
    src: 'https://guiadoscore7dias.com/wp-content/uploads/2020/10/DEP2-598x1024.png'
  },
  {
    src: 'https://guiadoscore7dias.com/wp-content/uploads/2020/10/DEP2-598x1024.png'
  }
]

const bonus = [
  {
    title: 'Os 5 Cartões de Créditos que são mais Fáceis de Serem Aprovados!',
    src: 'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  },
  {
    title: 'Os 5 Cartões de Créditos que são mais Fáceis de Serem Aprovados!',
    src: 'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  },
  {
    title: 'Os 5 Cartões de Créditos que são mais Fáceis de Serem Aprovados!',
    src: 'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  },
  {
    title: 'Os 5 Cartões de Créditos que são mais Fáceis de Serem Aprovados!',
    src: 'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  }
]

const questionsFrequent = [
  {
    "question": "Como vou receber o acesso?",
    "response": "Assim que a compra for concretizada você receberá em seu e-mail todos os dados de acesso."
  },
  {
    "question": "Por quanto tempo terei acesso?",
    "response": "Acesso vitalício (para sempre)."
  },
  {
    "question": "Preciso pagar algum valor mensal?",
    "response": "Não, o pagamento é feito apenas uma vez."
  },
  {
    "question": "É realmente seguro?",
    "response": "Sim, nosso sistema de pagamento é o mais seguro e utilizado do Brasil."
  },
  {
    "question": "Por quanto tempo terei acesso?",
    "response": "Acesso vitalício (para sempre)."
  },
  {
    "question": "Por quanto tempo terei acesso?",
    "response": "Acesso vitalício (para sempre)."
  }
]
const Home: React.FC = () => {
  const theme = useTheme().colors.themeColors
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    sources: [{
      src: teste.urlVideo,
      type: 'video/mp4'
    }],
    responsive: true                    
  }

  return (
    <Container>
      <span className="message">Você e algumas pessoas foram selecionadas para participar desse programa.</span>

      <section className="primary">
        <Text 
          className="title" 
          size={2.8}
          weight={700}
          align="center"
          color="#fff"
        >
          Descubra o método que está aumentando o score dos brasileiros em 720 pontos com apenas 7 Dias!
        </Text>

        <VideoPlayer
          videoJsOptions={videoJsOptions}
          // width={640}
          // height={320}
          poster={teste.poster}
        />


        <br />
        <br />
        <br />
        <Button themeColor="light">
          SIM! QUERO COMPRAR AGORA!
        </Button>
        <br />
        <img className="pagamento" src="https://guiascoremaximo.com/wp-content/uploads/2020/12/compra-segura-meiospagamento.png" />
        {/* <br />
        <Text className="compraSegura" size={.8} weight={400} color="#fff" align="center">Compra segura/políticas de privacidade.</Text> */}
        <br />
        <br />
      </section>

      {/* <section>
      </section> */}

      <section className="ebookSection">
        <div className="ourEbook">
          <Slide left>
            <img 
              src="https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockup.png" 
              alt="Ebook Image" 
            />
          </Slide>
          <div>
            <Slide right>
              <Text size={1.2}>
                <b>O Segredo do Score Alto é uma passo a passo 
                de tudo que você precisa saber</b> para aumentar seu 
                score. Diferente de tudo que você já viu, o nosso 
                método que é 100% comprovado e garantido e foi desenvolvido 
                por um dos melhores analistas de crédito de grandes bancos para 
                te mostrar todo caminho para aumentar seu score e poder ter o crédito 
                que sempre sonhou.
                <br />
                <br />
                <b>O único método que você precisa seguir </b> 
                para sair de um score negativo para 
                um score positivo e conseguir o crédito que precisa
                para fazer o que desejar, como : Ter um cartão de crédito com um limite 
                que você precisa realmente, financiar um imóvel, um carro ou outro bem que você
                tanto sonha.
                <br />
                <br />
                e, além do nosso e-book segredos do score alto, você ainda vai receber junto mais 3
                bônus extras que vão te auxiliar de uma vez por todas a ter um score melhor e garantir 
                que todos os seus objetivos se tornem realidade.

              </Text>
            </Slide>
            <Slide right>
              <Button>
                QUERO AUMENTAR MEU SCORE AGORA
              </Button>
            </Slide>
          </div>
        </div>
      </section>

      <section className="primary">
        <Slide left>
          <Text 
          className="title"
            size={2.6}
            weight={900}
            color="#fff"
            align="center"
          >VEJA O QUE AS PESSOAS ESTÃO FALANDO SOBRE O SEGREDO DO SCORE ALTO 2.0...</Text>
        </Slide>

        <Slide bottom>
          <div className="depositions">
            {
              depositions.map((props, index) => (
                <img src={props.src} alt="Deposition"/>
              ))
            }
          </div>
        </Slide>
        <br />
        <br />
        <Slide left>
          <Button>
            QUERO AUMENTAR MEU SCORE AGORA
          </Button>
        </Slide>
        <br />
        <br />
      </section>

      {/* <section className="mediasSection">
        <Text
          size={3}
          weight={900}
          color={theme.primary}
        >NA MÍDIA</Text>
        <Text color={theme.text}>O (Produto X) já foi assunto em vários meios de comunicação e emissoras.</Text>
        <div className="medias">
          <img 
            src="https://originalguiadoscore.com.br/wp-content/uploads/2020/12/jornal-nacional-logo-518D23198E-seeklogo.com_.png"
            alt=""
          />
          <img 
            src="https://originalguiadoscore.com.br/wp-content/uploads/2020/12/g1-logo-1024x616-1-300x180.png"
            alt=""
          />
          <img 
            src="https://originalguiadoscore.com.br/wp-content/uploads/2020/12/r7-logo-1024x876-1-300x257.png"
            alt=""
          />
        </div>
        <Button>
          QUERO AUMENTAR MEU SCORE AGORA
        </Button>
       </section> */}

      <section>
        <Slide left>
          <Text
            size={3}
            weight={900}
            color={theme.primary}
            align="center"
          >Bônus exclusivos que você terá acesso</Text>
        </Slide>
        <br />
        <br />
        <div className="depositions">
          {
            bonus.map((props, index) => (
              <div className="bonus">
                <img src={props.src} alt="Deposition"/>
                <Text 
                  size={1.5} 
                  weight={900} 
                  color={theme.primary}
                  align="center"
                >Bonus {index + 1}</Text>
                <br />
                <Text size={1.2} align="center" weight={500} color={theme.text}>{props.title}</Text>
              </div>
            ))
          }
        </div>
      </section>
    
      <section className="primary">
        <br />
        <Slide right>
          <div className="purchase">
            <Text
              size={2}
              weight={900}
              color={theme.text}
              align="center"
            >
              Única oportunidade de ter acesso ao PRODUTO X
            </Text>
            <br />
            <br />

            <Text
              size={2}
              weight={700}
              color={theme.text}
              align="center"
            >
              <i>R$ 197,00</i> SOMENTE HOJE POR APENAS
            </Text>
            <Text
              size={2.8}
              weight={900}
              color={theme.text}
              align="center"
            >
              <strong>9x</strong> de <strong>R$ 8,88</strong>
            </Text>

            <Text
              size={2.8}
              weight={900}
              color={theme.text}
              align="center"
            >
              ou <strong>R$ 79,90</strong>
            </Text>
            <Text
              size={2}
              weight={700}
              color={theme.text}
              align="center"
              >
              À VISTA!
            </Text>
            
            <br />
            <Button>
              COMPRAR AGORA!
            </Button>
            <br />
            <img style={{ width: "50%" }} src="https://guiadoscore7dias.com/wp-content/uploads/2020/10/compra-segura-vetor-1-1.png" />
            {/* <Text className="compraSegura"  size={.8} weight={400} align="center">Compra segura/políticas de privacidade.</Text> */}
          
          </div>
        </Slide>
        <br />


        <div className="warranty">
          <Slide bottom>
            <img 
              src="https://guiascoremaximo.com/wp-content/uploads/2020/12/selo_versao1_doctor-1-removebg-preview.png" 
              alt="Ebook Image" 
            />
          </Slide>
          <Slide left>
            <Text size={2} color="#fff" weight={900} align="center">
              VOCÊ NÃO CORRE RISCO ALGUM!
            </Text>
            <Text size={1.3} color="#fff" align="center">
              Nossa missão com esse método é transformar vidas, para que você possa conseguir conquistar tudo o que tem em mente sem se preocupar, com a falta de crédito!
              <br />
              Confiamos tanto em nosso método e no resultado que ele trás que você achar que não valeu apena, devolvemos 100% do seu dinheiro, em até 7 Dias!
            </Text>
          </Slide>
        </div>

        <Slide bottom>
          <Timer initialMinute={30} />
        </Slide>
        <br />
        <br />
        <Slide right>
          <Button>
            COMPRAR AGORA!
          </Button>
        </Slide>

        <Slide bottom>
          <QuestionsFrequent questionsFrequent={questionsFrequent} />
        </Slide>
      </section>

      
    </Container>
  )
}

export default Home
