import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Background, Form } from './styles';

export function SignIn() {
  return (
    <Container>
      <main>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Faça seu login</h2>

          <Input type="email" placeholder="E-mail" icon={FiMail} />

          <Input type="password" placeholder="Senha" icon={FiLock} />

          <Button title="Entrar" />

          <Link to="/register">
            <ButtonText type="button" text="Criar conta" />
          </Link>
        </Form>
      </main>

      <Background />
    </Container>
  );
}
