/* variable constante*/
const precio = 400000;
const cantidadElement = document.querySelector('.cantidad');
/*-----------------------------------------------------------------*/
function calcularPrecioTotal(cantidad, precio) {
  const amount = Number(cantidad);
  const price = Number(precio);
  const total = price * amount;
/*-----------------------------------------------------------------*/
  return new Intl.NumberFormat("es-MX" ,{
    style:"currency", currency: "CLP",}).format(total);
}
/*---------------------------------------------------------------- */

function aumentarUnidades() {
  const precioTotalElement = querySelector('.valor-total');
  const cantidadValue = Number(document.querySelector('.cantidad').innerHTML);
  const nuevaCantidad = cantidadValue + 1;
  cantidadElement.innerHTML = nuevaCantidad;
  const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
  precioTotalElement.innerHTML = valorTotal;
  console.log(cantidadValue, valorTotal);
}
/*----------------------------------------------------------------------------- */


/*Agregar funcion disminuir*/