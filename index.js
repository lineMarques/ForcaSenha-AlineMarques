function verificaForcaSenha() {
  const inputSenha = document.getElementById("idSenha");
  let forcaSenha = 0;
  mostrarSenha(inputSenha);

  inputSenha.addEventListener("keyup", function (event) {
    senha = inputSenha.value;

    let snNumero = /[0-9]/;
    let snLetraMaiscula = /[A-Z]/;
    let snLetraMinuscula = /[a-z]/;
    let snCaractereEspecial = /[@!#$%^&*()/\\ ]/;


    if (senha.length > 1) {
      forcaSenha = 1;
    }
    if (senha.length > 6) {
      forcaSenha = 2;
    }
    if (senha.length >= 10) {
      forcaSenha = 3;
    }
    if (senha.length >= 12) {
      forcaSenha = 4;
    }
    if (senha.length >= 14) {
      forcaSenha = 5;
    }


    if (senha.match(snNumero)) {
      console.log("entrou");
      forcaSenha += 1;
    }
    if (snLetraMinuscula.test(senha)) {
      forcaSenha += 1;
    }
    if (snLetraMaiscula.test(senha)) {
      forcaSenha += 1;
    }
    if (snCaractereEspecial.test(senha)) {
      forcaSenha += 2;
    } 
 
    console.log("f", forcaSenha);
  });
}

function mostrarSenha(inputSenha) {
  const inHide = document.getElementById("idShowSenha");

  inHide.addEventListener("click", function (event) {
    if (inputSenha.type == "password") {
      inputSenha.type = "text";
      inHide.value = "HIDE";
    } else {
      inputSenha.type = "password";
      inHide.value = "SHOW";
    }
  });
}
verificaForcaSenha();
