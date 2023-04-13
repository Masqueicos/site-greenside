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