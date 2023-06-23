import * as S from "./styles";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { ButtonIcon } from "../../components/ButtonIcon";

export function Players(){
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight 
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <ButtonIcon icon="add" type="primary"/>
    </S.Container>
  );
}