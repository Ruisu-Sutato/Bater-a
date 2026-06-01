  let mostrar = document.getElementById("conteo");
  let barra = document.getElementById("barra");
function main() {
  navigator.getBattery().then(battery => {
  let h2 = document.getElementById("estado");
  let nivel = Math.round(battery.level * 100);
  mostrar.innerText = nivel + "%";
  barra.style.width = `${nivel}%`;
  if (battery.charging){
    h2.style.color = 'green';
    h2.innerText = "Cargando... ";
  }else if (nivel <= 18) {
    h2.style.color = 'red';
    h2.innerText = "Conecta el cargador batería baja ⚠️."
  }else{
    h2.innerText = " ";
  }
  if (nivel >= 80) {
    mostrar.style.color = '#043fe3ff';
    barra.style.background = '#043fe3ff';
  }else if (nivel < 80 && nivel >= 50) {
    mostrar.style.color = '#c4ff34';
    barra.style.background = '#c4ff34ff';
  }else if (nivel < 50 && nivel > 30) {
    mostrar.style.color = '#4f883c';
    barra.style.background = '#4f883c';
  }else if (nivel < 30) {
    mostrar.style.color = '#f10000';
    barra.style.background = '#f10000';
  }
  })
}
main();
setInterval(() => {
main();
}, 1000);