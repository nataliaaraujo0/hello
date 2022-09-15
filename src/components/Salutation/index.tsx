import Summer from "../../../src/assets/summer.jpg";
import Night from "../../../src/assets/night.jpg";
import Morning from "../../../src/assets/morning.jpg";

export const Salutation = () => {
  const data = new Date();
  const time = data.getHours();
  //let time = 18;

  const goodMorning = time >= 0 && time <= 11; // bom dia
  const goodAfternoon = time >= 12 && time <= 17; // boa tarde
  const goodEvening = time >= 18 && time <= 23; // boa noite
  return (
    <>
      {goodMorning && (
        <div style={{ width: "600px", height: "600px" }}>
          <img
            style={{ width: "600px", height: "600px" }}
            src={Morning}
            alt=""
          />
          <strong>Bom dia 🙃</strong>
        </div>
      )}
      {goodAfternoon && (
        <div style={{ width: "600px", height: "600px", background: "" }}>
          <img
            style={{ width: "600px", height: "600px" }}
            src={Summer}
            alt=""
          />
          <strong>Boa tarde 🙃</strong>
        </div>
      )}
      {goodEvening && (
        <div style={{ width: "600px", height: "600px" }}>
          <img style={{ width: "600px", height: "600px" }} src={Night} alt="" />
          <strong>Boa noite 🙃</strong>
        </div>
      )}
    </>
  );
};
