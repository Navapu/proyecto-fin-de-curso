
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
    let postre = document.getElementById('postre')
    let bebida = document.getElementById('bebida')
    especialidad.style.display = 'block'
    entrante.style.display = 'none'
    sopa.style.display = 'none'
    postre.style.display = 'none'
    bebida.style.display = 'none'

}
function aentrante(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    let postre = document.getElementById('postre')
    let bebida = document.getElementById('bebida')
    bebida.style.display = 'none'
    postre.style.display = 'none'
    especialidad.style.display = 'none'
    entrante.style.display = 'block'
    sopa.style.display = 'none'
}
function asopa(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    let postre = document.getElementById('postre')
    let bebida = document.getElementById('bebida')
    bebida.style.display = 'none'
    postre.style.display = 'none'
    especialidad.style.display = 'none'
    entrante.style.display = 'none'
    sopa.style.display = 'block'
}
function apostre(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    let postre = document.getElementById('postre')
    let bebida = document.getElementById('bebida')
    bebida.style.display = 'none'
    postre.style.display = 'block'
    especialidad.style.display = 'none'
    entrante.style.display = 'none'
    sopa.style.display = 'none'
}
function abebida(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    let postre = document.getElementById('postre')
    let bebida = document.getElementById('bebida')
    bebida.style.display = 'block'
    postre.style.display = 'none'
    especialidad.style.display = 'none'
    entrante.style.display = 'none'
    sopa.style.display = 'none'
}
function pedir(){
    let div = document.getElementById('nonex')
    let p = document.createElement('p')
    p.textContent = "Hola"
    div.appendChild(p)
    console.log(div)
}

                                                                            // FUNCION AÑADIR NAVARRO
                                                                            // FUNCION AÑADIR NAVARROZ
                                                                            // FUNCION AÑADIR NAVARROZ
function navarroz (){
    let cebolla = document.getElementById('cebolla').checked
    let champiñones = document.getElementById('champiñones').checked
    let pollo = document.getElementById('pollo').checked
    let frita = document.getElementById('frita').checked
    let salsa = document.getElementById('salsa').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde')
    verde.style.display = 'block'
    preciox.textContent = "7€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/arroz.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde')
        verde.style.display = 'none'
        document.getElementById('cebolla').checked = false
        document.getElementById('champiñones').checked = false
        document.getElementById('pollo').checked = false
        document.getElementById('frita').checked = false
        document.getElementById('salsa').checked = false
    }, 2000);
    plato.textContent = 'Navarroz' 
    if (cebolla){
        let cebollax = document.createElement('p')
        cebollax.textContent = 'Sin cebolla'
        arroz.appendChild(cebollax)
    }
    if(champiñones){
        let champiñonex = document.createElement('p')
        champiñonex.textContent = 'Sin champiñones'
        arroz.appendChild(champiñonex)
    }
    if(pollo){
        let pollox = document.createElement('p')
        pollox.textContent = 'Sin Pollo'
        arroz.appendChild(pollox)
    }
    if(frita){
        let fritax = document.createElement('p')
        fritax.textContent = 'Sin cebolla frita'
        arroz.appendChild(fritax)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function ensalada (){
    let tomate = document.getElementById('tomate').checked
    let gambas = document.getElementById('gambas').checked
    let pepino = document.getElementById('pepino').checked
    let frita = document.getElementById('frita1').checked
    let salsa = document.getElementById('salsa1').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verdee = document.getElementById('verdee')
    verdee.style.display = 'block'
    preciox.textContent = "8,5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/i.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verdee = document.getElementById('verdee')
        verdee.style.display = 'none'
        document.getElementById('tomate').checked = false
        document.getElementById('gambas').checked = false
        document.getElementById('pepino').checked = false
        document.getElementById('frita1').checked = false
        document.getElementById('salsa1').checked = false
    }, 2000);
    plato.textContent = 'Elvisa' 
    if (tomate){
        let tomatex = document.createElement('p')
        tomatex.textContent = 'Sin tomate'
        arroz.appendChild(tomatex)
    }
    if(gambas){
        let gambax = document.createElement('p')
        gambax.textContent = 'Sin gambas'
        arroz.appendChild(gambax)
    }
    if(pepino){
        let pepinox = document.createElement('p')
        pepinox.textContent = 'Sin pepino'
        arroz.appendChild(pepinox)
    }
    if(frita){
        let fritax = document.createElement('p')
        fritax.textContent = 'Sin cebolla frita'
        arroz.appendChild(fritax)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function chen (){
    let ternera = document.getElementById('ternera').checked
    let tofu = document.getElementById('tofu').checked
    let pollo = document.getElementById('pollo1').checked
    let sesamo = document.getElementById('sesamo').checked
    let salsa = document.getElementById('salsa2').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde1')
    verde.style.display = 'block'
    preciox.textContent = "8€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/chem.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde1')
        verde.style.display = 'none'
        document.getElementById('ternera').checked = false
        document.getElementById('tofu').checked = false
        document.getElementById('pollo1').checked = false
        document.getElementById('sesamo').checked = false
        document.getElementById('salsa2').checked = false
    }, 2000);
    plato.textContent = 'Chen' 
    if (ternera){
        let ternerax = document.createElement('p')
        ternerax.textContent = 'Sin ternera'
        arroz.appendChild(ternerax)
    }
    if(tofu){
        let tofux = document.createElement('p')
        tofux.textContent = 'Sin tofu'
        arroz.appendChild(tofux)
    }
    if(pollo){
        let pollox = document.createElement('p')
        pollox.textContent = 'Sin Pollo'
        arroz.appendChild(pollox)
    }
    if(sesamo){
        let sesamox = document.createElement('p')
        sesamox.textContent = 'Sin sesamo'
        arroz.appendChild(sesamox)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function fortu (){
    let cerdo = document.getElementById('cerdo').checked
    let cachai = document.getElementById('cachai').checked
    let zanahoria = document.getElementById('zanahoria').checked
    let packchoi = document.getElementById('packchoi').checked
    let salsa = document.getElementById('salsa3').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde2')
    verde.style.display = 'block'
    preciox.textContent = "7,5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/pasta.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde2')
        verde.style.display = 'none'
        document.getElementById('cerdo').checked = false
        document.getElementById('cachai').checked = false
        document.getElementById('zanahoria').checked = false
        document.getElementById('packchoi').checked = false
        document.getElementById('salsa3').checked = false
    }, 2000);
    plato.textContent = '4tuNoodles' 
    if (cerdo){
        let cerdox = document.createElement('p')
        cerdox.textContent = 'Sin cerdo'
        arroz.appendChild(cerdox)
    }
    if(cachai){
        let cachaix = document.createElement('p')
        cachaix.textContent = 'Sin cachai'
        arroz.appendChild(cachaix)
    }
    if(zanahoria){
        let zanahoriax = document.createElement('p')
        zanahoriax.textContent = 'Sin zanahoria'
        arroz.appendChild(zanahoriax)
    }
    if(packchoi){
        let packchoix = document.createElement('p')
        packchoix.textContent = 'Sin pak choi'
        arroz.appendChild(packchoix)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function adrian (){
    let pimiento = document.getElementById('pimiento').checked
    let piña = document.getElementById('piña').checked
    let pollo3 = document.getElementById('pollo3').checked
    let sesamo2 = document.getElementById('sesamo2').checked
    let salsa = document.getElementById('salsa4').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde3')
    verde.style.display = 'block'
    preciox.textContent = "7€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/tom.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde3')
        verde.style.display = 'none'
        document.getElementById('pimiento').checked = false
        document.getElementById('piña').checked = false
        document.getElementById('pollo3').checked = false
        document.getElementById('sesamo2').checked = false
        document.getElementById('salsa4').checked = false
    }, 2000);
    plato.textContent = 'Adrian arroz' 
    if (pimiento){
        let pimientox = document.createElement('p')
        pimientox.textContent = 'Sin pimiento'
        arroz.appendChild(pimientox)
    }
    if(piña){
        let piñax = document.createElement('p')
        piñax.textContent = 'Sin piña'
        arroz.appendChild(piñax)
    }
    if(pollo3){
        let pollo3x = document.createElement('p')
        pollo3x.textContent = 'Sin pollo'
        arroz.appendChild(pollo3x)
    }
    if(sesamo2){
        let sesamo2x = document.createElement('p')
        sesamo2x.textContent = 'Sin sesamo'
        arroz.appendChild(sesamo2x)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function xexuga (){
    let queso = document.getElementById('queso').checked
    let frita3 = document.getElementById('frita3').checked
    let papaya = document.getElementById('papaya').checked
    let tomate = document.getElementById('tomate1').checked
    let salsa = document.getElementById('salsa5').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde5')
    verde.style.display = 'block'
    preciox.textContent = "9€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/ensalada.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde5')
        verde.style.display = 'none'
        document.getElementById('queso').checked = false
        document.getElementById('frita3').checked = false
        document.getElementById('papaya').checked = false
        document.getElementById('tomate1').checked = false
        document.getElementById('salsa5').checked = false
    }, 2000);
    plato.textContent = 'Xexuga' 
    if (queso){
        let quesox = document.createElement('p')
        quesox.textContent = 'Sin queso de cabra'
        arroz.appendChild(quesox)
    }
    if(frita3){
        let frita3x = document.createElement('p')
        frita3x.textContent = 'Sin cebolla frita'
        arroz.appendChild(frita3x)
    }
    if(papaya){
        let papayax = document.createElement('p')
        papayax.textContent = 'Sin papaya'
        arroz.appendChild(papayax)
    }
    if(tomate){
        let tomatex = document.createElement('p')
        tomatex.textContent = 'Sin tomate'
        arroz.appendChild(tomatex)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}