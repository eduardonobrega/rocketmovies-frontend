import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { Container, Background, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  
  return (
    <Container>
      <Background />

      <main>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Crie sua conta</h2>

          <Input
            type="text"
            placeholder="Nome"
            icon={FiUser}
          />

          <Input
            type="email"
            placeholder="E-mail"
            icon={FiMail}
          />

          <Input
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button title="Cadastrar"  />

          <a to={-1}>
            <ButtonText text="Voltar para o login" icon={FiArrowLeft} />
          </a>
        </Form>
      </main>
    </Container>
  );
}
