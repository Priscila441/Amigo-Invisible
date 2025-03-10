let input = document.getElementById('amigo');
let listaAmigoUL = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado'); 
let listaAmigos = [];


function agregarAmigo(){
    let amigo = input.value.trim();
    if (amigo === ''){
        alert('Ingrese un nombre válido');
    }
    else{
        listaAmigos.push(amigo);
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent  = amigo;
        listaAmigoUL.appendChild(nuevoAmigo);
        input.value = '';
    }
}   


function sortearAmigo(listaAmigos){

    if(listaAmigos.length === 0){
        alert('No hay amigos para sortear. Agregue al menos un amigo');
    }
    else{
        let indiceAmigoSecreto = Math.floor(Math.random()*listaAmigos.length);
    
        let sorteo = document.createElement('p');
        sorteo.textContent = `El amigo secreto es : ${listaAmigos[indiceAmigoSecreto]}`;
        //resultado.innerHTML = '';
        resultado.appendChild(sorteo);
    }
    
}
