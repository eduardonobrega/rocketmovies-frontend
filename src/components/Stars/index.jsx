import { Container } from './styles';
import { FiStar } from 'react-icons/fi';

export function Stars({ rating }) {
  let myArray = new Array(5).fill(undefined);

  return (
    <Container>
      {myArray.map((e, index) => {
        if (index + 1 <= rating) {
          return (
            <li key={index} className="bg">
              <FiStar />
            </li>
          );
        } else {
          return (
            <li key={index}>
              <FiStar />
            </li>
          );
        }
      })}
    </Container>
  );
}
