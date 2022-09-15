import styles from "./styled.css";
import Summer from "../../../src/assets/summer.jpg";
import Night from "../../../src/assets/night.jpg";
import Morning from "../../../src/assets/morning.jpg";

export const Card = () => {
  const data = new Date();
  const time = data.getHours();

  //let time = 18;
  return (
    <>
      {time >= 0 && time <= 11 && (
        <div style={{ width: "600px", height: "600px" }}>
          <img
            style={{ width: "600px", height: "600px" }}
            src={Morning}
            alt=""
          />
          <strong>Bom dia 🙃</strong>
        </div>
      )}
      {time >= 12 && time <= 17 && (
        <div style={{ width: "600px", height: "600px", background: "" }}>
          <img
            style={{ width: "600px", height: "600px" }}
            src={Summer}
            alt=""
          />
          <strong>Boa tarde 🙃</strong>
        </div>
      )}
      {time >= 18 && time <= 23 && (
        <div style={{ width: "600px", height: "600px" }}>
          <img style={{ width: "600px", height: "600px" }} src={Night} alt="" />
          <strong>Boa noite 🙃</strong>
        </div>
      )}
    </>
  );
};
