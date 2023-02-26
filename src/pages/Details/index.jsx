import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

import { Container, Content } from './styles';

export function Details() {
  return (
    <Container>
      <Header readOnly />

      <div>
        <a href="#">
          <ButtonText icon={FiArrowLeft} text="Voltar" />
        </a>

        <ButtonText text="Excluir Filme" />
      </div>
      <main>
        <Content>
          <header>
            <div>
              <h1>Diário de um Banana</h1>

              <Stars rating={5} />
            </div>

            <div>
              <img
                src="https://github.com/eduardonobrega.png"
                alt="foto de perfil"
              />

              <span>Por Eduardo Nóbrega</span>

              <FiClock />

              <span>03/02/23 às 09:40</span>
            </div>
          </header>

          <Tag name="Familia" />
          <Tag name="Infantil" />

          <article>
            <p>
              Greg Heffley é um garoto magricela, mas ambicioso, com uma
              imaginação ativa e grandes planos de ser rico e famoso, ele só
              precisa sobreviver ao ensino fundamental primeiro. Como detalhes
              de suas hilárias, e muitas vezes desastrosas tentativas de
              preencher as páginas de seu diário, Greg aprende a apreciar os
              verdadeiros amigos e a satisfação de defender o que é certo
            </p>
          </article>
        </Content>
      </main>
    </Container>
  );
}
