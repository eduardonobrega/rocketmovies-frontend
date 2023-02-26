import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

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

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

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

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
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
            src={avatar}
            alt={`Foto de perfil de ${user.name}`}
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" className="sr-only" onChange={handleChangeAvatar}/>
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
