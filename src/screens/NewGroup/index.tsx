import * as S from './styles';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';


export function NewGroup() {
    return (
        <S.Container>
            <Header showBackButton/>

            <S.Content>
                <S.Icon />
                <Highlight 
                    title='Nova Tchurma'
                    subtitle='crie a turma para adicionar pessoas'
                
                />
                <Button 
                    title='Criar'
                />


            </S.Content>
        </S.Container>
    );
}