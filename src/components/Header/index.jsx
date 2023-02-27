import { Container, Profile } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

import { Input } from '../Input';

export function Header({ ...props }) {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleProfile(element) {
    if (element == 'Sair') {
      signOut();
      navigate('/');
    } else {
      navigate('/profile');
    }
  }

  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Input type="search" placeholder="Pesquisar pelo título" {...props} />

      <Profile onClick={(e) => handleProfile(e.target.textContent)}>
        <div>
          <p>{user.name}</p>
          <button>Sair</button>
        </div>

        <img
          src={avatarUrl}
          alt={`Foto de perfil de ${user.name}`}
        />
      </Profile>
    </Container>
  );
}
