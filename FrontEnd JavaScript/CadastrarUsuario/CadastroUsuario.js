function CadastarUsuario(){
    let username = document.getElementById('username').value;
    let nome = document.getElementById('nome').value;
    let uf = document.getElementById('uf').value;
    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let cpfcnpj = document.getElementById('cpfcnpj').value;
    let password = document.getElementById('password').value;

    if(username && password && nome && uf && cidade && bairro && rua && numero && cpfcnpj){
        alert("ok");
    }else{
        Toastify({
            text: "Favor preencher todos os dados!",
            className: "info",
            style: {
              background: red,
            }
          }).showToast();
    }
}