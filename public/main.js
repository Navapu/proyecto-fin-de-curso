function btn1(){
    let boton1 = document.getElementById('boton1')
    let boton2 = document.getElementById('boton2')
    boton1.style.backgroundColor = "#ffd10b"
    boton1.style.border = "none"
    boton2.style.backgroundColor = "white"
    boton2.style.border = "1px dashed black"
}
function btn2(){
    let boton1 = document.getElementById('boton1')
    let boton2 = document.getElementById('boton2')
    boton2.style.backgroundColor = "#ffd10b"
    boton2.style.border = "none"
    boton1.style.backgroundColor = "white"
    boton1.style.border = "1px dashed black"
}
function abrir(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    especialidad.style.display = 'block'
    entrante.style.display = 'none'
    sopa.style.display = 'none'

}
function aentrante(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    especialidad.style.display = 'none'
    entrante.style.display = 'block'
    sopa.style.display = 'none'
}
function asopa(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    especialidad.style.display = 'none'
    entrante.style.display = 'none'
    sopa.style.display = 'block'
}