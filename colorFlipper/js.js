const btnRandomColor = document.querySelector(".randomColor");
const colorInfo = document.querySelector(".colorInfo");
const mainSec = document.querySelector(".mainSec");

btnRandomColor.addEventListener("click", e => {
  const ranadomColor1 = Math.floor(Math.random() * 256);
  const ranadomColor2 = Math.floor(Math.random() * 256);
  const ranadomColor3 = Math.floor(Math.random() * 256);
  const finalColor = convertRGBtoHex(ranadomColor1, ranadomColor2, ranadomColor3);
  mainSec.style.backgroundColor = `${finalColor}`;
  colorInfo.textContent = `backgroundColor = ${finalColor}`;
  console.log(mainSec.style.backgroundColor);
});

function colorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

const convertRGBtoHex = function (color1, color2, color3) {
  return `#${colorToHex(color1)}${colorToHex(color3)}${colorToHex(color3)}`;
};
