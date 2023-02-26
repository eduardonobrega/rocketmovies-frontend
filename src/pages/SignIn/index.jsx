import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Background, Form } from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    if (!email || !password) {
      return alert('Informe todos os dados!');
    }
    signIn({ email, password });
  }
  return (
    <Container>
      <main>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Faça seu login</h2>

          <Input
            type="email"
            placeholder="E-mail"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Senha"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button title="Entrar" onClick={handleSignIn}/>

          <Link to="/register">
            <ButtonText type="button" text="Criar conta" />
          </Link>
        </Form>
      </main>

      <Background />
    </Container>
  );
}
