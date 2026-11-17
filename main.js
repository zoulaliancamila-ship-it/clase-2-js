// Simulador de inicio de sesión: el usuario tiene 3 intentos
// para ingresar su usuario y contraseña correctos

// Datos de acceso válidos y cantidad máxima de intentos (no cambian)
const USUARIO = "camila";
const CLAVE = "coder";
const MAX_INTENTOS = 3;

// Valores que van cambiando en cada intento
let intentos = 0;
let acceso = false;

// BUCLE: se repite hasta 3 intentos o hasta que el acceso sea correcto
while (intentos < MAX_INTENTOS && !acceso) {
    const usuarioIngresado = prompt("Ingresá tu usuario:");
    const claveIngresada = prompt("Ingresá tu contraseña:");

    // CONDICIONAL dentro del bucle: valida los datos ingresados
    if (usuarioIngresado === USUARIO && claveIngresada === CLAVE) {
        acceso = true;
        console.log("✅ Acceso concedido");
    } else if (usuarioIngresado !== USUARIO) {
        intentos++;
        console.log(`❌ Usuario incorrecto. Intentos restantes: ${MAX_INTENTOS - intentos}`);
        alert(`Usuario incorrecto. Te quedan ${MAX_INTENTOS - intentos} intentos.`);
    } else {
        intentos++;
        console.log(`❌ Contraseña incorrecta. Intentos restantes: ${MAX_INTENTOS - intentos}`);
        alert(`Contraseña incorrecta. Te quedan ${MAX_INTENTOS - intentos} intentos.`);
    }
}

// Resultado final al terminar el bucle
if (acceso) {
    alert(`¡Bienvenida/o, ${USUARIO}! Ingresaste correctamente.`);
} else {
    console.log("🔒 Cuenta bloqueada por demasiados intentos");
    alert("Cuenta bloqueada por demasiados intentos.");
}
