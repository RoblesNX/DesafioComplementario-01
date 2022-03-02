//Uso de ciclos en conjunto con un array donde lista el nombre de los alumnos, 
//su nota y si aprobaron superando la nota mínima de 6 o más.

const ProyectosFinales = [10, 3, 4, 7, 1]
const NombreDelAlumno = ["Carlitos", "Juancito", "Pepe", "Luciano", "Valentino"]

for (let i = 0; i <= 4; i++) {
    document.write(NombreDelAlumno[i] + " sacó una nota de " + ProyectosFinales[i]);
    if (ProyectosFinales[i] >= 6) {
        document.write(" y está aprobado")
    }
    else {
        document.write(" y está está desaprobado")
    }
    document.write("<br>");
}