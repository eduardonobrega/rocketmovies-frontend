import { Container } from './styles';

export function Button({ title, icon: Icon, isLoading, ...rest }) {
  return (
    <Container 
      type="button" 
      disabled={isLoading}
      {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Container>
  );
}