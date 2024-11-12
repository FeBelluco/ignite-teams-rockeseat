import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type FilterStyleProps = {
    isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
    ${({ theme, isActive}) => isActive && css` /*isActive serve para acrescentar a borda apenas quando o botao estiver selecionado*/
        border: 1px solid ${theme.COLORS.GREEN_700}
    `};

    border-radius: 4px;
    margin-right: 12px;

    height: 30px;
    width: 70px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};
`;