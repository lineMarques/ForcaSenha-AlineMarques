function verificaForcaSenha() {
  const inputSenha = document.getElementById("idSenha");
  let forcaSenha = 0;
  mostrarSenha(inputSenha);

  inputSenha.addEventListener("keyup", function (event) {
    let senha = inputSenha.value;
    let snNumero = 0;
    let snMaiscula = 0;
    let snMinuscula = 0;
    let snCaracteresEspc = 0;

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

    for (let i = 0; i < senha.length; i++) {
      /* Verificando se senha tem numeros */
      if (senha.charCodeAt([i]) >= 48 && senha.charCodeAt([i]) <= 57) {
        snNumero = 1;
      }

      /* Verificando se senha tem letras maiusculas */
      if (senha.charCodeAt([i]) >= 65 && senha.charCodeAt([i]) <= 90) {
        snMaiscula = 1;
      }

      /* Verificando se senha tem letras minusculas */
      if (senha.charCodeAt([i]) >= 97 && senha.charCodeAt([i]) <= 122) {
        snMinuscula = 1;
      }

      /* Verificando se senha tem caracteres especiais */
      if (
        senha.charCodeAt([i]) != (senha.charCodeAt([i]) >= 48 && senha.charCodeAt([i]) <= 57) &&
        senha.charCodeAt([i]) != (senha.charCodeAt([i]) >= 65 && senha.charCodeAt([i]) <= 90) &&
        senha.charCodeAt([i]) != (senha.charCodeAt([i]) >= 97 && senha.charCodeAt([i]) <= 122)
      ) {
        snCaracteresEspc = 2;
      }
    }

    /* Soma dos pontos para definir a força da senha */
    forcaSenha += snNumero + snMaiscula + snMinuscula + snCaracteresEspc;

    const divCorForca = document.getElementById("corForca");

    if (forcaSenha <= 5) {  
      divCorForca.classList.add("fraca");
      divCorForca.classList.remove("media");
      divCorForca.classList.remove("forte");
    } else if (forcaSenha > 5 && forcaSenha < 9) {
      divCorForca.classList.remove("fraca");
      divCorForca.classList.add("media");
      divCorForca.classList.remove("forte");
    } else {
      divCorForca.classList.remove("fraca");
      divCorForca.classList.remove("media");
      divCorForca.classList.add("forte");
    }

    console.log(forcaSenha);
  });
}

function mostrarSenha(inputSenha) {
  const inputHide = document.getElementById("idShowSenha");

  inputHide.addEventListener("click", function (event) {
    if (inputSenha.type == "password") {
      inputSenha.type = "text";
      inputHide.value = "Esconder";
    } else {
      inputSenha.type = "password";
      inputHide.value = "Mostrar";
    }
  });
}
verificaForcaSenha();
