import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { Container, Content, Form } from './styles';

export function New() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddTag() {
    if (newTag) {
      const isNewTag = !tags.includes(newTag);

      if (isNewTag) {
        setTags((prevState) => [...prevState, newTag]);
      } else {
        alert('Tag já adicionada!');
      }
    }

    setNewTag('');
    document.querySelector('#inputNewTag').focus();
  }

  function handleRemoveTag(tagDeleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
  }

  function handleClearForm() {
    setTitle('');
    setRating('');
    setDescription('');
    setTags([]);
    setNewTag('');
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Informe o título do filme!');
    }

    if (rating < 0 || rating > 5) {
      return alert('Nota inválida!');
    }

    if (newTag != '') {
      return alert(
        `Clique no + para adicionar a tag: ${newTag}. ou limpe o campo!`
      );
    }

    try {
      await api.post('/notes', {
        title,
        rating: Math.floor(rating),
        description,
        tags,
      });
      alert('Filme cadastrado com sucesso!');
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível adicionar!');
      }
    }
  }

  return (
    <Container>
      <Header readOnly />

      <Link to={-1}>
        <ButtonText text="Voltar" icon={FiArrowLeft} />
      </Link>
      <main>
        <Content>
          <h1>Novo filme</h1>

          <Form>
            <div className="twoColumns">
              <Input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Input
                type="number"
                placeholder="Sua nota (de 0 a 5)"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <TextArea
              placeholder="Observações"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Section title="Marcadores">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={(e) => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                id="inputNewTag"
                isNew
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </Section>

            <div className="twoColumns">
              <Button title="Limpar" onClick={handleClearForm} />
              <Button title="Salvar alterações" onClick={handleNewNote} />
            </div>
          </Form>
        </Content>
      </main>
    </Container>
  );
}
