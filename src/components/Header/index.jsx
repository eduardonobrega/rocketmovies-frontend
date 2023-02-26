import { Container, Profile } from './styles';

import { Input } from '../Input';

export function Header({ ...props }) {
  return (
    <Container>
      <a href="#">
        <h1>RocketMovies</h1>
      </a>

      <Input type="search" placeholder="Pesquisar pelo título" {...props} />

      <Profile>
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
