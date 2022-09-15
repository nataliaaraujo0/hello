export const Card = () => {
  const data = new Date();
  const time = data.getHours();

  function salutation() {
    if (time >= 0 && time <= 11) {
      alert("Bom dia");
    } else if (time >= 12 && time <= 17) {
      alert("boa tarde");
    } else if (time >= 18 && time <= 23) {
      alert("boa noite");
    } else {
      alert("nao disse nada");
    }
  }
  window.onload = salutation;

  return <h1> a hora atual é: {time}h</h1>;
};
