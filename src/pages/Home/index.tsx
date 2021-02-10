import React from 'react'
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
          SIM, QUERO COMPRAR AGORA
        </Button>
        <br />
        <img className="pagamento" src="https://guiascoremaximo.com/wp-content/uploads/2020/12/compra-segura-meiospagamento.png" />
        <br />
        <Text className="compraSegura" size={.8} weight={400} color="#fff" align="center">Compra segura/políticas de privacidade.</Text>
        <br />
        <br />
      </section>

      {/* <section>
      </section> */}

      <section className="ebookSection">
        <div className="ourEbook">
          <img 
            src="https://guiascoremaximo.com/wp-content/uploads/2020/12/ScoreMaximo-Mockup.png" 
            alt="Ebook Image" 
          />
          <Text size={1.2}>
            O <b>( Produto X)</b> é um metodo detalhado criado por grandes expecialistas do mercado financeiro, especializado em análise de crédito de grandes bancos, e que vai te ajudar a aumentar o seu score e nunca mais ter problemas com falta de credito.
            <br />
            <br />
            <b>Seguindo esse metodo, passo a passo você consiguirá sair de qualquer pontuação baixa e ter um score confiavel acima de 700 pontos</b>, o sulficiente para poder ter o credito que precisar
            nos principais bancos do brasil, para fazer o que desejar, como ter cartão de crédito, financiar um imóvel, um carro etc.
            <br />
            <br />
            Mas ele <b>( Produto X)</b> não revela só como você ter um score alto,
            como também mostra exatamente o que fazer para nunca mais ter qualquer pedido de crédito negado.
            <br />
            <br />
            <b>
              E além desse metodo, você receberá alguns bonús Exclusivos, que irão te ajudar de vez a nunca mais ter problemas com creditos, e garantir que ocê realize seus objetivos e sonhos.
            </b>
          </Text>
        </div>
      </section>
      
      <section>
        <Button>
          QUERO AUMENTAR MEU SCORE AGORA
        </Button>
      </section>

      <section className="primary">
        <Text 
        className="title"
          size={2.6}
          weight={900}
          color="#fff"
          align="center"
        >Veja abaixo avaliação de quem comprou, quem compra aprova</Text>

        <div className="depositions">
          {
            depositions.map((props, index) => (
              <img src={props.src} alt="Deposition"/>
            ))
          }
        </div>
        <br />
        <br />
      </section>

      <section className="mediasSection">
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
       </section>

      <section>
        <Text
          size={3}
          weight={900}
          color={theme.primary}
          align="center"
        >Bônus exclusivos que você terá acesso</Text>
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
            COMPRAR AGORA
          </Button>
          <br />
          <img className="pagamento" src="https://guiascoremaximo.com/wp-content/uploads/2020/12/compra-segura-meiospagamento.png" />
          <Text className="compraSegura"  size={.8} weight={400} align="center">Compra segura/políticas de privacidade.</Text>
        
        </div>
        <br />


        <div className="warranty">
          <img 
            src="https://guiascoremaximo.com/wp-content/uploads/2020/12/selo_versao1_doctor-1-removebg-preview.png" 
            alt="Ebook Image" 
          />
          <div>
            <Text size={2} color="#fff" weight={900} align="center">
              VOCÊ NÃO CORRE RISCO ALGUM!
            </Text>
            <br />
            <Text size={1.3} color="#fff" align="center">
              Nossa missão com esse método é transformar vidas, para que você possa conseguir conquistar tudo o que tem em mente sem se preocupar, com a falta de crédito!
              <br />
              Confiamos tanto em nosso método e no resultado que ele trás que você achar que não valeu apena, devolvemos 100% do seu dinheiro, em até 7 Dias!
            </Text>
          </div>
        </div>


        <Timer initialMinute={30} />

        <QuestionsFrequent questionsFrequent={questionsFrequent} />
      </section>

      
    </Container>
  )
}

export default Home
