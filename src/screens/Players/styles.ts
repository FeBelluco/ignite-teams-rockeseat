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
