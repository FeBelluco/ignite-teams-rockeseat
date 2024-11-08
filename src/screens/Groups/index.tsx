import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from "./styles";
import { Button } from '@components/Button';


export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Amigos', 'Família']); //Deixei explicito que meu state é um array de string.

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com sua tchurma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty
            message='Que tal cadastrar uma turma?'
          />
        )}
      />
      <Button title='Criar' />
    </Container>
  );
}
