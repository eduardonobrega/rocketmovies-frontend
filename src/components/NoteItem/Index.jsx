import { FiX, FiPlus } from 'react-icons/fi';

import { Container } from './styles';

export function NoteItem({ isNew = false, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        readOnly={!isNew}
        placeholder="Novo marcador"
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
