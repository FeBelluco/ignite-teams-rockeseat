import { useTheme } from 'styled-components/native';
import { ButtonIcon } from '@components/ButtonIcon';

import * as S from './styles';

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayersCard({ name, onRemove }: Props) {
  const { COLORS } = useTheme();
  return (
    <S.Container>
      <S.Icon name='person' color={COLORS.WHITE} />

      <S.Name>{name}</S.Name>

      <ButtonIcon 
        icon='close'
        type='SECONDARY'
        onPress={onRemove}
      />
    </S.Container>
  );
}
