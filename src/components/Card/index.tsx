import * as S from "./styled";
type CardProps = {
  title?: string;
  img?: any;
  bg?: string;
  fontColor?: string;
};
export const Card = ({
  title = "Olá",
  bg,
  fontColor,
  img = "../../../src/assets/hello.gif",
}: CardProps) => {
  return (
    <S.CardWrapper background={bg} color={fontColor}>
      <img src={img} />
      <strong>{title}🙃</strong>
    </S.CardWrapper>
  );
};
