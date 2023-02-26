import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Header, Form, Avatar } from './styles';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  async function handleUpdateProfile() {
    if (!name || !email) {
      return alert('Nome e e-mail são obrigatórios');
    }

    setOldPassword('');
    setNewPassword('');

    const updated = {
      name,
      email,
      oldPassword,
      newPassword,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated });
  }

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
            alt={`Foto de perfil de ${user.name}`}
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" className="sr-only" />
          </label>
        </Avatar>

        <Input
          type="text"
          icon={FiUser}
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="oldPassword"
          icon={FiLock}
          placeholder="Senha atual"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          id="newPassword"
          icon={FiLock}
          placeholder="Nova senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}
