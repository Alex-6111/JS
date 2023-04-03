const mood = prompt("Який ваш настрій сьогодні?");

switch (mood) {
  case "щасливий":
    console.log("😊");
    break;
  case "сумний":
    console.log("😢");
    break;
  case "злюсіль":
    console.log("😠");
    break;
  default:
    console.log("Настрій не розпізнано!");
    break;
}
