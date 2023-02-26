import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';


import { Container, Header, Form, Avatar } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <Container>
      <Header>
        <Link to={-1}>
          <ButtonText icon={FiArrowLeft} text="Voltar" />
        </Link>
      </Header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/eduardonobrega.png"
            alt={`Foto de perfil de Eduardo`}
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" className="sr-only" />
          </label>
        </Avatar>

        <Input type="text" icon={FiUser} placeholder="Nome" />
        <Input type="email" icon={FiMail} placeholder="E-mail" />
        <Input
          type="password"
          id="oldPassword"
          icon={FiLock}
          placeholder="Senha atual"
        />
        <Input
          type="password"
          id="newPassword"
          icon={FiLock}
          placeholder="Nova senha"
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}