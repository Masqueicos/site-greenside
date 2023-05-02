var usuariosDB = [
    {usuario: "leon", senha: "1234"},
    {usuario: "ashley", senha: "4321"},
    {usuario: "tonio rodrigues", senha: "5678"},
    {usuario: "wesker", senha: "8675"}
];

var usuarioValidar;
var senhaValidar;
var validacaoCompleta;

let usuarioValidar = leon;
let senha = 1234;

/*
function validarLogin(params) {
    let usuarioValidar = leon;
    let senha = 1234;
}
*/

let user = usuariosDB.find(function user(params) {
    return user.usuario === usuarioValidar;
})

console.log(user);

