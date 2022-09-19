
//Mostrar pantalla
window.onload = function () {//Acion tras cargar la pantalla
    pantalla = document.getElementById("textPassword");//elemento para sacar por pantalla

}

muy_facil = document.getElementById("muy_facil");
normal = document.getElementById("normal");
dificil = document.getElementById("dificil");
muy_dificil = document.getElementById("muy_dificil");

//Botones
copy = document.getElementById('copy');
mayus = document.getElementById('mayus');
minus = document.getElementById('minus');
num = document.getElementById('num');
simb = document.getElementById('simb');

//codigo ASCII --------------------------------------------------
const lista_de_caracteres_completo = '$+=?@_01223456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
const caracteres_mayuscula = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const caracteres_minusculas = 'abcdefghijkmnpqrstuvwxyz';
const caracteres_numeros = '0123456789';
const caracteres_simbolos = '$+=?@_';
//---------------------------------------------------------------

//Copiar
function copiarAlPortapapeles(id_elemento) {

    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    copy.style.display = 'block';
}

//texto aleatorio

function tamaño() {
    //Traer archivos de HTML
    range = Math.ceil(document.getElementById("range").value);
    tamaño_Contraseña = range;
    caracteres_conseguidos = 0;
    caracteres_temporal = '';
    contraseña_definitiva = '';

    array_caracteres = [];

    for (i = 0; i < tamaño_Contraseña; i++) {
        array_caracteres[i] = null
    }


    largo_numero = (Math.floor(Math.random() * (tamaño_Contraseña - tamaño_Contraseña + 1)) + tamaño_Contraseña)

    return largo_numero
}

cantidad_seleccion = 0;


function generar_aleatorio_predeterminado() {
    let reslt1 = '';
    largo = tamaño();
    let guardar = '';
    let temporal = '';


    if (mayus.checked) {
        temporal = caracteres_mayuscula;
        guardar = guardar + temporal
        cantidad_seleccion = cantidad_seleccion + 1;
    }

    if (minus.checked) {
        temporal = caracteres_minusculas;
        guardar = guardar + temporal
        cantidad_seleccion = cantidad_seleccion + 1;
    }

    if (num.checked) {
        temporal = caracteres_numeros;
        guardar = guardar + temporal
        cantidad_seleccion = cantidad_seleccion + 1;
    }

    if (simb.checked) {
        temporal = caracteres_simbolos;
        guardar = guardar + temporal
        cantidad_seleccion = cantidad_seleccion + 1;
    }


    for (let i = 0; i < largo; i++) {
        reslt1 += guardar.substring(0, guardar.length).charAt(Math.floor(Math.random() * guardar.length));
    }


    return reslt1
}

function difiultad() {
    largo = tamaño();
    if (cantidad_seleccion == 4 && largo >= 14) {
        muy_dificil.style.background = '#A4FFAF'
        dificil.style.background = '#A4FFAF'
        muy_facil.style.background = '#A4FFAF'
        normal.style.background = '#A4FFAF'
    }
    else if (cantidad_seleccion == 3 && largo >= 9) {

        dificil.style.background = '#F8CD65'
        muy_facil.style.background = '#F8CD65'
        normal.style.background = '#F8CD65'
    }
    else if (cantidad_seleccion == 2 && largo >= 7) {
        muy_facil.style.background = '#FB7C58'
        normal.style.background = '#FB7C58'
    } else if (cantidad_seleccion == 1 && largo >= 4) {
        muy_facil.style.background = '#F64A4A'

    }
}

function display_String_aleatorio() {
    pantalla.innerHTML = generar_aleatorio_predeterminado();
    copy.style.display = 'none';


}