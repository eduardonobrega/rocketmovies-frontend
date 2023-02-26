import { Container, Profile } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../Input';

export function Header({ ...props }) {
  const navigate = useNavigate();

  function handleProfile(element) {
    if (element == 'Sair') {
      navigate('/');
    } else {
      navigate('/profile');
    }
  }

  return (
    <Container>
      <Link to={-1}>
        <h1>RocketMovies</h1>
      </Link>

      <Input type="search" placeholder="Pesquisar pelo título" {...props} />

      <Profile onClick={(e) => handleProfile(e.target.textContent)}>
        <div>
          <p>Eduardo Nóbrega</p>
          <button>Sair</button>
        </div>

        <img
          src="https://github.com/eduardonobrega.png"
          alt={`Foto de perfil de Eduardo`}
        />
      </Profile>
    </Container>
  );
}
