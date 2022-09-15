import Summer from "../../../src/assets/summer.jpg";
import Night from "../../../src/assets/night.jpg";
import Morning from "../../../src/assets/morning.jpg";
import { Card } from "../Card";

export const Salutation = () => {
  const data = new Date();
  const time = data.getHours();
  //let time = 20;

  const goodMorning = time >= 0 && time <= 11; // bom dia
  const goodAfternoon = time >= 12 && time <= 17; // boa tarde
  const goodEvening = time >= 18 && time <= 23; // boa noite
  return (
    <>
      {goodMorning && <Card bg="#0367bd" img={Morning} title="Bom dia" />}
      {goodAfternoon && <Card bg="#a37edf" img={Summer} title="Boa tarde" />}
      {goodEvening && <Card bg="#001b2e" img={Night} title="Boa noite" />}
    </>
  );
};
