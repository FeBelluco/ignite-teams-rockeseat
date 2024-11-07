import theme from 'src/theme';
import { Container } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export function EyeIcon() {
  return (
    <Container>
      <Ionicons name="eye" size={26} marginRight={10} color={theme.COLORS.GREEN_500} />
    </Container>
  );
}
