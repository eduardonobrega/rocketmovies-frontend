import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
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
              <h1>Interestellar</h1>

              {/* <Stars rating={note.rating} /> */}
            </div>

            <div>
              <img src="https://github.com/eduardonobrega.png" alt="foto de perfil" />

              <span>Por Eduardo Nóbrega</span>

              <FiClock />

              <span>
                03/02/23 às 09:40
              </span>
            </div>
          </header>
        </Content>
      </main>
    </Container>
  );
}
