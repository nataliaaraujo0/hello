export const useSalutation = () => {
  const data = new Date();
  const time = data.getHours();
  // let time = 12;

  const goodMorning = time >= 0 && time <= 11; // bom dia
  const goodAfternoon = time >= 12 && time <= 17; // boa tarde
  const goodEvening = time >= 18 && time <= 23; // boa noite

  return {
    data,
    time,
    goodMorning,
    goodAfternoon,
    goodEvening,
  };
};
