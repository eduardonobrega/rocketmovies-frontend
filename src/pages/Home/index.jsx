import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Note } from '../../components/Note';

import { Container, Content } from './styles';

export function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }
    fetchTags();
  }, []);
  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>

        <select>
          <option value="all">Todos</option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>

        <Link to="/new">
          <Button className="desktop" icon={FiPlus} title="Adicionar filme" />
          <Button className="mobile" icon={FiPlus} />
        </Link>
      </div>

      <main>
        <Content>
          <Note
            note={{
              title: '1408',
              rating: 5,
              description:
                'Um promissor romancista, Mike Enslin (John Cusack), resolveu enveredar por outro caminho e escrever livros que investiguem fenômenos paranormais. Enslin nunca presenciou realmente algum destes fatos, então fica difícil obter credibilidade. Além do mais Mike é totalmente cético, pois até hoje não encontrou evidências de que exista vida após a morte. No entanto decide ir até Nova York e se hospedar no Dolphin Hotel, mais exatamente no quarto 1408, que tem fama de ser habitado por espíritos malignos. O gerente do hotel, Gerald Olin (Samuel L. Jackson), o avisa que 56 mortes já ocorreram neste quarto, mas Mike está decidido a conferir se sua fama está condizente com a verdade.',
              tags: [{ id: 1, name: 'Terror' }],
            }}
          />
        </Content>
      </main>
    </Container>
  );
}
