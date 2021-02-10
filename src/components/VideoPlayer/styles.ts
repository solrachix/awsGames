import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  /*
    Player Skin Designer para Video.js
    http://videojs.com

    Para personalizar a edição da skin do jogador
    o CSS abaixo. Clique em "detalhes"
    abaixo para adicionar comentários ou perguntas.

    Este designer pode ser vinculado a:
    https://codepen.io/heff/pen/EarCt/left/?editors=010
    */
    
    video, .vjs-poster, .video-js {
        width: 80vw;
        height: 46vw;
    }

    .video-js {
     /* O tamanho da fonte básica controla o tamanho de tudo, não apenas do texto.
        Todas as dimensões usam tamanhos baseados em em para que a escala junto com o tamanho da fonte.
        Experimente aumentar para 15 px e veja o que acontece. */
        font-size: 10px;
        /* A cor da fonte principal muda as CORES DOS ÍCONE, bem como o texto */
        color: ${props => props.theme.colors.themeColors.primary};
    }
    .vjs-poster {
        /* background-size: cover; */
        background-color: ${props => props.theme.colors.themeColors.background};
    }
    .vjs-icon-placeholder:before{
        font-size: 2.8rem;
        top: 17%!important;
    }
    .vjs-button > .vjs-icon-placeholder:before {
        font-size: 1.8em;
        line-height: 1.67;
        top: 0%!important;
    }

    /* O "Botão Big Play" é o botão de reprodução que aparece antes da reprodução do vídeo.
    Para centralizá-lo, defina os valores de alinhamento para centro e meio. A localização típica
    do botão é o centro, mas há uma tendência de movê-lo para um canto
    onde fica fora do caminho de conteúdo valioso na imagem do pôster.*/
    .vjs-default-skin .vjs-big-play-button {
        /* O tamanho da fonte é o que torna o botão de reprodução grande ... grande.
            Todos os valores de largura / altura usam ems, que são um múltiplo do tamanho da fonte.
            Se o tamanho da fonte .video-js for 10px, então 3em será igual a 30px.*/
        font-size: 3em;
        /* We're using SCSS vars here because the values are used in multiple places.
            Now that font size is set, the following em values will be a multiple of the
            new font size. If the font-size is 3em (30px), then setting any of
            the following values to 3em would equal 30px. 3 * font-size. */
        /* 1.5em = 45px default */
        line-height: 1.5em;
        width: 2.4em;
        height: 2.4em;
        /* 0.06666em = 2px default */
        /* border: 0.06666em solid #fff; */
        border: none;
        /* 0.3em = 9px default */
        border-radius: .5em;
        /* Align top left. 0.5em = 15px default */
        /* left: 0.6em; */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

    }

    /* A cor padrão dos fundos de controle é principalmente preto, mas com um pouco
    um pouco de azul para que ainda possa ser visto em quadros de vídeo totalmente pretos, que são comuns. */
    .video-js .vjs-control-bar,
    .video-js .vjs-big-play-button,
    .video-js .vjs-menu-button .vjs-menu-content {
        /* IE8 - caso não tenha suporte para Alpha */
        background-color: #dddddd;
        /* Opacity: 1.0 = 100%, 0.0 = 0% */
        background: ${props => rgba(props.theme.colors.themeColors.text, 0.1)};
        backdrop-filter: blur(4px) opacity(99%); 
        /* filter: blur(1px); */
    }

    /* Slider - usado pela barra de volume e a barra de progresso */
    .video-js .vjs-slider {
        background-color: #73859f;
        background-color: rgba(115, 133, 159, 0.5);
    }

    /* A cor da barra deslizante é usada para a barra de progresso e a barra de volume
    (os dois primeiros podem ser removidos após uma correção que está chegando) */
    .video-js .vjs-volume-level,
    .video-js .vjs-play-progress,
    .video-js .vjs-slider-bar {
        background: #fff;
    }

    /* A barra de progresso principal também possui uma barra que mostra o quanto foi carregado. */
    .video-js .vjs-load-progress {
        /* Para o IE8 vamos clarear a cor */
        background: #bfc7d3;
        /* Caso contrário, contaremos com opacidades empilhadas */
        background: rgba(115, 133, 159, 0.5);
    }

    /* A barra de progresso do carregamento também tem divs internos que representam
    intervalos de tempo carregados desconectados menores */
    .video-js .vjs-load-progress div {
        /* Para o IE8 vamos clarear a cor */
        background: white;
        /* Caso contrário, contaremos com opacidades empilhadas */
        background: rgba(115, 133, 159, 0.75);
    }
`;
