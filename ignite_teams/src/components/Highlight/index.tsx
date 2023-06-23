import * as S from "./styles";

interface HighlightProps {
  title: string;
  subtitle: string;
}

export function Highlight({ subtitle, title }: HighlightProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subitle>{subtitle}</S.Subitle>
    </S.Container>
  );
}