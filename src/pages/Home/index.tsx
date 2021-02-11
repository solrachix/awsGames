import React from 'react'
import Slide from 'react-reveal/Slide'
import { useTheme } from 'styled-components'

import { FaHome, FaCreditCard, FaCartPlus, FaCloud } from 'react-icons/fa'
import EvaluationSlide from '../../components/EvaluationSlide'
import VideoPlayer from '../../components/VideoPlayer'
import Button from '../../components/Button'
import Text from '../../components/Text'
import { Container } from './styles'

import video from '../../assets/video1.mp4'
import videoBackground from '../../assets/video-background.png'
import QuestionsFrequent from './../../components/QuestionsFrequent/index'
import Timer from './../../components/Timer/index'

const teste = {
  title: 'Pré-encomende o Cyberpunk 2077 agora mesmo',
  urlVideo: video,
  poster: videoBackground
}

const evaluation = [
  {
    src:
      'https://guiadoscore7dias.com/wp-content/uploads/2020/10/DEP2-598x1024.png'
  },
  {
    src:
      'https://guiadoscore7dias.com/wp-content/uploads/2020/10/DEP2-598x1024.png'
  },
  {
    src:
      'https://guiadoscore7dias.com/wp-content/uploads/2020/10/DEP2-598x1024.png'
  },
  {
    src:
      'https://guiadoscore7dias.com/wp-content/uploads/2020/10/DEP2-598x1024.png'
  }
]

const bonus = [
  {
    title: 'Os Cartões de Créditos que  são mais Fáceis de Serem Aprovados.',
    src:
      'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  },
  {
    title: 'Os Piores Elementos que mais baixam o seu score de crédito.',
    src:
      'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  },
  {
    title:
      'Passo a Passo para você renegociar as suas dívidas e sair do vermelho.',
    src:
      'https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png'
  }
]

const questionsFrequent = [
  {
    question: 'Como vou receber o acesso?',
    response:
      'Assim que a compra for concretizada você receberá em seu e-mail todos os dados de acesso.'
  },
  {
    question: 'Por quanto tempo terei acesso?',
    response: 'Acesso vitalício (para sempre).'
  },
  {
    question: 'Preciso pagar algum valor mensal?',
    response: 'Não, o pagamento é feito apenas uma vez.'
  },
  {
    question: 'É realmente seguro?',
    response:
      'Sim, nosso sistema de pagamento é o mais seguro e utilizado do Brasil.'
  },
  {
    question: 'Por quanto tempo terei acesso?',
    response: 'Acesso vitalício (para sempre).'
  },
  {
    question: 'Por quanto tempo terei acesso?',
    response: 'Acesso vitalício (para sempre).'
  }
]
const Home: React.FC = () => {
  const theme = useTheme().colors
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    sources: [
      {
        src: teste.urlVideo,
        type: 'video/mp4'
      }
    ],
    responsive: true
  }

  return (
    <Container>
      <span className="message">
        Você e algumas pessoas foram selecionadas para participar desse
        programa.
      </span>

      <section className="primary">
        <Text
          className="title"
          size={2.8}
          weight={700}
          align="center"
          color="#fff"
        >
          Descubra o método que está aumentando o score dos brasileiros em
          <br />
          <b>720 pontos com apenas 7 Dias</b>!
        </Text>

        <Text size={1} weight={600} align="center" color="#fff">
          <b>[</b> Sem riscos, 100% testado e garantido! <b>]</b>
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
        <Button themeColor="light">SIM! QUERO AUMENTAR MEU SCORE!</Button>
        <br />
        <img
          className="pagamento"
          src="https://guiascoremaximo.com/wp-content/uploads/2020/12/compra-segura-meiospagamento.png"
        />
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
                <b>
                  O Segredo do Score Alto é uma passo a passo de tudo que você
                  precisa saber
                </b>{' '}
                para aumentar seu score. Diferente de tudo que você já viu, o
                nosso método que é 100% comprovado e garantido e foi
                desenvolvido por um dos melhores analistas de crédito de grandes
                bancos para te mostrar todo caminho para aumentar seu score e
                poder ter o crédito que sempre sonhou.
                <br />
                <br />
                <b>O único método que você precisa seguir </b>
                para sair de um score negativo para um score positivo e
                conseguir o crédito que precisa para fazer o que desejar, como :
                Ter um cartão de crédito com um limite que você precisa
                realmente, financiar um imóvel, um carro ou outro bem que você
                tanto sonha.
                <br />
                <br />
                e, além do nosso e-book segredos do score alto, você ainda vai
                receber junto mais 3 bônus extras que vão te auxiliar de uma vez
                por todas a ter um score melhor e garantir que todos os seus
                objetivos se tornem realidade.
              </Text>
            </Slide>
            <Slide right>
              <Button>SIM! QUERO AUMENTAR MEU SCORE AGORA!</Button>
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
          >
            VEJA O QUE AS PESSOAS ESTÃO FALANDO SOBRE
            <br />
            <b>O SEGREDO DO SCORE ALTO 2.0...</b>
          </Text>
        </Slide>

        <Slide bottom>
          <EvaluationSlide {...{ evaluation }} />
        </Slide>
        <br />
        <br />
        <Slide left>
          <Button>SIM! QUERO AUMENTAR MEU SCORE AGORA!</Button>
        </Slide>
        <br />
        <br />
      </section>

      {/* <section className="mediasSection">
        <Text
          size={3}
          weight={900}
          color={theme.themeColors.primary}
        >NA MÍDIA</Text>
        <Text color={theme.themeColors.text}>O (Produto X) já foi assunto em vários meios de comunicação e emissoras.</Text>
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
        <div className="whatCanYouWin">
          <Text
            size={2}
            weight={900}
            color={theme.themeColors.primary}
            align="center"
          >
            Score <b>2.0</b>
          </Text>

          <Text className="description" size={1} weight={700}>
            {/* Tenha sempre o score alto e realize seus sonhos, é rápido e em
            poucos dias! */}
            Seu score alto se tornou realidade, todos os seus sonhos a um passo
            de você!
          </Text>

          <img src="https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockups031.png" />

          <div>
            <b>
              <FaCreditCard />
              Solicite cartões de credito
            </b>
            <b>
              <FaHome />
              Faça financiamentos
            </b>
            <b>
              <FaCartPlus />
              Tenha credito no mercado
            </b>
            <b>
              <FaCloud />
              Tenha o bem que sempre sonhou
            </b>
          </div>

          <Button>EU QUERO AGORA</Button>
          <br />
          <br />
          <br />
        </div>

        <Slide left>
          <Text
            size={3}
            weight={900}
            color={theme.themeColors.primary}
            align="center"
          >
            + 3 bônus totalmente de graça para você hoje mesmo
          </Text>
        </Slide>
        <br />
        <br />
        <div className="evaluation">
          {bonus.map((props, index) => (
            <div key={index} className="bonus">
              <img src={props.src} alt="Deposition" />
              <Text
                size={1.5}
                weight={900}
                color={theme.themeColors.primary}
                align="center"
              >
                Bonus {index + 1}
              </Text>
              <br />
              <Text
                size={1.2}
                align="center"
                weight={500}
                color={theme.themeColors.text}
              >
                {props.title}
              </Text>
            </div>
          ))}
        </div>
      </section>

      <section className="primary">
        <br />
        <Slide right>
          <div className="purchase">
            <div>
              <Text size={1} color="#fff" align="center">
                <i>R$197</i>
                <br />
                por apenas 12x de:
              </Text>
            </div>
            <br />

            <div>
              <Text size={2.6} weight={900} color={theme.blue} align="center">
                R$<b>9</b>,74
              </Text>
              <br />

              <Text size={1} color={theme.themeColors.text} align="center">
                ou <strong>R$97,90</strong> à vista
              </Text>
              <Text size={1} color={theme.themeColors.text} align="center">
                menos de 0,32 centavos por dia
              </Text>

              <br />
              <Button>COMPRAR AGORA!</Button>
              <br />
              <img src="https://guiadoscore7dias.com/wp-content/uploads/2020/10/compra-segura-vetor-1-1.png" />
              {/* <Text className="compraSegura"  size={.8} weight={400} align="center">Compra segura/políticas de privacidade.</Text> */}
            </div>
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
              Nossa missão com esse método é transformar vidas, para que você
              possa conseguir conquistar tudo o que tem em mente sem se
              preocupar, com a falta de crédito!
              <br />
              Confiamos tanto em nosso método e no resultado que ele trás que
              você achar que não valeu apena, devolvemos 100% do seu dinheiro,
              em até 7 Dias!
            </Text>
          </Slide>
        </div>

        <Slide bottom>
          <Timer initialMinute={10} />
        </Slide>
        <br />
        <br />
        <Slide right>
          <Button>COMPRAR AGORA!</Button>
        </Slide>

        <Slide bottom>
          <QuestionsFrequent questionsFrequent={questionsFrequent} />
        </Slide>
      </section>
    </Container>
  )
}

export default Home
