// obten el elemento que mostrara el contador
const contadorElement = document.getElementById('contador');

// inicializa el contador en 0
let contador = 0;

//verifica si el contador ya existe en el almacemacenamiento local
if (localStorage.getItem('contador')) {
    contador =
    parseInt(localStorage.getItem('contador'));
}

//incrementa el contador cada vez que se carga la pagina
contador++;

// guarda el contador en el almacenamiento local
localStorage.setItem('contador', contador);

//muestra el contador en la pantalla
contadorElement.textContent = `Visitantes: ${contador}`;

//ocultar el contador para que solo tu lo puedas ver
if (!localStorage.getItem('mostrarContador'))  {
    contadorElement.style.display = 'none';
}

//agrega un elemento para mostrar el contador cuando se pulse una tecla especifica
document.addEventListener('keydown', (event) => {
    if (event.key === 'm') {
        contadorElement.style.display = 'block';
        localStorage.setItem('mostrarContador', true);
    }
});
