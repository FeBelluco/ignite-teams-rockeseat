import styled, { css } from "styled-components/native";

import theme from "src/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 24px;
`;

export const PlayersInputContainer = styled.View`
  width: 100%;

  border-radius: 6px;
  flex-direction: row;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
  `};
`;

export const PlayersInput = styled.TextInput.attrs({
  placeholderTextColor: `${theme.COLORS.GRAY_200}`,
  placeholder: "Digite sua senha",
})`
  flex: 1;
  padding: 16px;
  border-radius: 4px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    border-color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD};
  `};
`;

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0px 12px;
`;

export const NumbersOfPLayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
