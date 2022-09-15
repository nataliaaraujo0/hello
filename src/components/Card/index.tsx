export const Card = () => {
  const data = new Date();
  const time = data.getHours();

  return (
    <>
      {time >= 0 && time <= 11 && <strong>Bom dia</strong>}
      {time >= 12 && time <= 17 && <strong>Boa tarde</strong>}
      {time >= 18 && time <= 23 && <strong>Boa noite</strong>}
    </>
  );
};
