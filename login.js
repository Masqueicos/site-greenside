/*
var user;
var senha;
var recorrente;

recorrente = true;

function conferirLoginDo() {
    user = window.prompt('Digite seu usuário:');
    senha = window.prompt('Digite sua senha:');

    do {
        if (user == "Adri") {
            if (senha == 123) {
                window.alert("Você será redirecionado ao seu perfil")
                recorrente = false
            } else {
                window.alert("Usuário ou senha inválido")
            }
        } else {
            window.alert("Usuário ou senha inválido")
        }
    } while (recorrente == true);
}

function conferirLoginWhile() {
    user = window.prompt('Digite seu usuário:');
    senha = window.prompt('Digite sua senha:');

    while (user == "Adri" && senha == 123) {
        window.alert("Você será redirecionado ao seu perfil")
    }
}

////////////////////////////////////////////////////////////////

var loginObjeto = {
    usuario: ['user1', 'user2', 'user3', 'user4'],
    senha: ['12345', '67890', '56663', '77879'],
}

////////////////////////////////////////////////////////////////

var usuarioeSenha = [
    {"usuario": 'Alex', "senha": '1234'}
]

let dados = {
    usuario: ['Alex', 'Jonas', 'Leon', 'Ashley'],
    senha: ['dghjk', 'fhjgk', 'gdhgku', 'fyhuij'],
}

for (let i = 0; i < dados[usuario].length; i++) {
    console.log('O usuário' + dados[usuario] + 'tem a senha' + dados[senha]);
}


for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

for (let usuariosIndex = 0; usuariosIndex < array.length; usuariosIndex++) {
    const element = array[usuariosIndex];
}
*/

var usuariosDB = [
    { usuario: "leon", senha: "1234" },
    { usuario: "adriano imperador", senha: "4321" },
    { usuario: "tonio rodrigues", senha: "5678" },
    { usuario: "wesker", senha: "8675" },
];

var usuarioValidar;
var senhaValidar;
var validacaoCompleta = false;

function validarLogin(event) {
    event.preventDefault();

    usuarioValidar = document.getElementById("usuarioInput").value;
    senhaValidar = document.getElementById("senhaInput").value;

    let user = usuariosDB.find(function (user) {
        return user.usuario === usuarioValidar;
    })

    let password = usuariosDB.find(function (password) {
        return password.senha === senhaValidar;
    })

    do {
        if (user === usuarioValidar) {
            if (senha === senhaValidar) {
                validacaoCompleta = true;
                console.log("Login correto");
            } else {
                console.log("Login errado");
            }
        } else {
            console.log("Login errado")
        }
    } while (validacaoCompleta = false); 
}

/*
do {
    if (user == "Adri") {
        if (senha == 123) {
            window.alert("Você será redirecionado ao seu perfil")
            recorrente = false
        } else {
            window.alert("Usuário ou senha inválido")
        }
    } else {
        window.alert("Usuário ou senha inválido")
    }
} while (recorrente == true);
*/