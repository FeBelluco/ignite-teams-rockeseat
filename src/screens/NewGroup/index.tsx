import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import * as S from "./styles";

export function NewGroup() {

  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  function handlePlayers(){
    navigation.navigate('players', { group })
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova Tchurma"
          subtitle="crie a turma para adicionar pessoas"
        />

        <Input onChangeText={setGroup}/>
        <Button 
        title="Criar" 
        style={{ marginTop: 20 }} 
        onPress={handlePlayers}
        />
      </S.Content>
    </S.Container>
  );
}
