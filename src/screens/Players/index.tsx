import { useState } from 'react';
import { FlatList } from 'react-native';

import * as S from './styles';

import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { EyeIcon } from '@components/EyeIcon';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';

export function Players() {

  const [team, setTeam] = useState('Time A');

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turmas'
        subtitle='adicione a galera e separe os times'
      />

      <S.PlayersInputContainer>
      
        <Input 
             placeholder='Digite o nome da pessoa'
             autoCorrect={false}
        />
        
        <ButtonIcon icon='add'/>
        </S.PlayersInputContainer>

        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item == team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />



      </S.Container>
  );
}
