let heros = [["Goku", 10000], ["Chuck Norris", 10000000], ["Ash", 500],["Picollo", 8500],["Naruto", 7500],["Luffy", 6500],["Zoro", 4500],["Sanji", 1500]];

for (i = 0; i < heros.length; i++) {
  if (heros[i][1] >= 10001) {
    console.log("O Herói de nome " + heros[i][0] + " está no nível de Radiante.") } 
  else if (heros[i][1] < 1000) {
    console.log("O Herói de nome " + heros[i][0] + " está no nível de Ferro."); }
  else if (heros[i][1] > 9001 && heros[i][1] <= 10000) {
    console.log("O Herói de nome " + heros[i][0] + " está no nível de Imortal."); }
  else if (heros[i][1] > 8001 && heros[i][1] <= 9000) {
    console.log("O Herói de nome " + heros[i][0] + " está no nível de Ascedente."); }
  else if (heros[i][1] > 7001 && heros[i][1] <= 8000) {
    console.log("O Herói de nome " + heros[i][0] + " está no nível de Platina."); }
  else if (heros[i][1] > 6001 && heros[i][1] <= 7000) {
    console.log("O Herói de nome " + heros[i][0] + " está no nível de Ouro."); }
  else if (heros[i][1] > 2001 && heros[i][1] <= 6000) {
    console.log("O Herói de nome " + heros[i][0] + " está no nível de Prata."); }
  else if (heros[i][1] > 1001 && heros[i][1] <= 2000) {
    console.log("O Herói de nome " + heros[i][0] + " está no nível de Bronze."); }
  else {
    console.log("Seu herói quebrou nosso sensor.")
  }

}
