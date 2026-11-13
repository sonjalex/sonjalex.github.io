const input = document.getElementById("calculation");
const button = document.getElementById("start");
const result = document.getElementById("result");

button.addEventListener("click", function() {
  const text = input.value;
  let vastaus = 0;

  if (text.includes("+")) {
    const luvut = text.split("+");
    vastaus = Number(luvut[0]) + Number(luvut[1]);
  } else if (text.includes("-")) {
    const luvut = text.split("-");
    vastaus = Number(luvut[0]) - Number(luvut[1]);
  } else if (text.includes("*")) {
    const luvut = text.split("*");
    vastaus = Number(luvut[0]) * Number(luvut[1]);
  } else if (text.includes("/")) {
    const luvut = text.split("/");
    vastaus = Number(luvut[0]) / Number(luvut[1]);
  }

  result.textContent = vastaus;
});
