function validaLogin(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username && password){
        alert("ok");
    }
}

function cadastro(){
    window.location.href = "../CadastrarUsuario/CadastroUsuario.html";
}