import Summer from "../../../src/assets/summer.jpg";
import Night from "../../../src/assets/night.jpg";
import Morning from "../../../src/assets/morning.jpg";
import { Card } from "../Card";
import { useSalutation } from "../../hooks/useSalutation";

export const Salutation = () => {
  const { goodMorning, goodAfternoon, goodEvening } = useSalutation();
  return (
    <>
      {goodMorning && <Card bg="#0367bd" img={Morning} title="Bom dia" />}
      {goodAfternoon && <Card bg="#a37edf" img={Summer} title="Boa tarde" />}
      {goodEvening && <Card bg="#001b2e" img={Night} title="Boa noite" />}
    </>
  );
};
