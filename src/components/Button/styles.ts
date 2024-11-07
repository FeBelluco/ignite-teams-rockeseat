import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const TitleButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

// export const Content = styled(Button).attrs(({ theme  } ) => ({
//   size: 32,
//   color: theme.COLORS.GREEN_700,
//   weight: "fill",
// }))`
//   width: 50%;

//   flex-direction: row;
//   justify-content: ${({ theme }) => theme.COLORS.GREEN_500};
// `;
