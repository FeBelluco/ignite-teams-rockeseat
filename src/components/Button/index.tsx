import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

export type Props = TouchableOpacityProps & {
  title: string;
  type?: S.ButtonTypeStyleProps;
};

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      <S.TitleButton>{title}</S.TitleButton>
    </S.Container>
  );
}

