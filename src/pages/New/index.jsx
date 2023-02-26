import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import {Button} from '../../components/Button'

import { Container, Content, Form } from './styles';

export function New() {
  return (
    <Container>
      <Header readOnly />

      <a>
        <ButtonText text="Voltar" icon={FiArrowLeft} />
      </a>
      <main>
        <Content>
          <h1>Novo filme</h1>

          <Form>
            <div className="twoColumns">
              <Input type="text" placeholder="Título" />

              <Input
                type="number"
                placeholder="Sua nota (de 0 a 5)"
                min="0"
                max="5"
              />
            </div>

            <TextArea placeholder="Observações" />

            <Section title="Marcadores">
              <NoteItem value="React" />

              <NoteItem isNew />
            </Section>

            <div className="twoColumns">
              <Button title="Limpar" />
              <Button title="Salvar alterações" />
            </div>
          </Form>
        </Content>
      </main>
    </Container>
  );
}
