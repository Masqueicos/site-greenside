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
    {usuario: "leon", senha: "1234"},
    {usuario: "ashley", senha: "4321"},
    {usuario: "tonio rodrigues", senha: "5678"},
    {usuario: "wesker", senha: "8675"}
];

var usuarioValidar;
var senhaValidar;
var validacaoCompleta = false;



function validarLogin() {
    usuarioValidar = document.getElementById("usuarioInput").value;
    senhaValidar = document.getElementById("senhaInput").value;
    
    console.log(usuariosDB.find(usuario == usuarioValidar))









    /*do {

    }

    usuariosDB.forEach(function () {
        
    })*/
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


    const inventory = [
        {name: 'apples', quantity: 2},
        {name: 'bananas', quantity: 0},
        {name: 'cerejas', quantity: 5}
    ];
    
    function isCherries(fruit) {
        return fruit.name === 'cerejas';
    }
    
    console.log(inventory.find(isCherries));
    // { name: 'cerejas', quantity: 5 }