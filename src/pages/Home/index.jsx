import { FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Note } from '../../components/Note';

import { Container, Content } from './styles';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const navigate = useNavigate();

  function handleDetails(noteId) {
    navigate(`/details/${noteId}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${selectedTag}`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [search, selectedTag]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }
    fetchTags();
  }, []);

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />
      <div>
        <h1>Meus filmes</h1>

        <select onChange={(e) => setSelectedTag(e.target.value)}>
          <option value="">Todos</option>
          {tags &&
            tags.map((tag) => (
              <option key={String(tag.id)} value={tag.name}>
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
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              note={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>
      </main>
    </Container>
  );
}
