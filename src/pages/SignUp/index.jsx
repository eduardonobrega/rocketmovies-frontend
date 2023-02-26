import { useState } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Container, Background, Form } from './styles';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos');
    }

    try {
      await api.post('/users', { name, email, password });

      alert('Cadastro realizado com sucesso');
      await signIn({ email, password });
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível cadastrar!');
      }
    }
  }

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
            onChange={(e) => setName(e.target.value)}
          />

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

          <Button title="Cadastrar" onClick={handleSignUp} />

          <Link to={-1}>
            <ButtonText text="Voltar para o login" icon={FiArrowLeft} />
          </Link>
        </Form>
      </main>
    </Container>
  );
}
