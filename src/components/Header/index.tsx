import { useNavigation } from '@react-navigation/native';

import logImg from "@assets/logo.png";

import * as S from "./styles";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups');

  }

  return (
    <S.Container>
      {showBackButton && (
        <S.HeadBox>
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
        </S.HeadBox>
      )}
      <S.Logo source={logImg}/>
    </S.Container>
  );
}
