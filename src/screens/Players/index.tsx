import { useState } from 'react';
import { FlatList } from 'react-native';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Filter } from '@components/Filter';
import { EyeIcon } from '@components/EyeIcon';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { ButtonIcon } from '@components/ButtonIcon';
import { PlayersCard } from '@components/PlayerCard';

import * as S from './styles';

export function Players() {

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([])

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turmas'
        subtitle='adicione a galera e separe os times'
      />

      <S.PlayersInputContainer>
        <Input placeholder='Digite o nome da pessoa' autoCorrect={false} />

        <ButtonIcon icon='add' />
      </S.PlayersInputContainer>

      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item == team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumbersOfPLayers>
          {players.length}
        </S.NumbersOfPLayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayersCard
            name={item}
            onRemove={() => { }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            message='Não há pessoa nesse time?'
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ [{paddingBottom: 100}, players.length === 0 && { flex: 1 }] }
      />
      <Button
        title='Remover Turma'
        type='SECONDARY'
      />
    </S.Container>
  );
}
