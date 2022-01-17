const resultados =  (e) => {
  e.preventDefault();
  const data = new FormData(e.target)
  const datos = Object.fromEntries(data.entries());
  datos.complejo = data.getAll('complejo')
  console.log(datos);
}

function main() {
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', resultados);
}

main()

