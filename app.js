let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo) {
        if (amigos.includes(amigo)) {
            alert('Este amigo já foi adicionado.');
        } else {
            amigos.push(amigo);
            document.getElementById('amigo').value = '';
            exibirAmigos();
        }
    } else {
        alert('Por favor, insira um nome.');
    }
}

function exibirAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length > 0) {
        let index = parseInt(Math.random() * amigos.length);
        let amigoSecreto = amigos[index];
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSecreto}</li>`;
    } else {
        alert('Por favor, adicione amigos antes de sortear.');
    }
}