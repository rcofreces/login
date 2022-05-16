let usuario: string = "Juan";
let contraseña: string = "Clavejuan";
let ingreseUsuario: string = prompt("Ingrese su usuario");
let ingreseContraseña: string = prompt("Ingrese su contraseña");

if (usuario === ingreseUsuario && contraseña === ingreseContraseña) {
  console.log("Usted ha ingresado correctamente");
} else {
  console.log("Usuario o contraseña incorrectos");
}
