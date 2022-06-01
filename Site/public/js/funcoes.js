// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var perfil_nome = document.getElementById("perfil_nome");
    var header1 = document.getElementById("header-span");
    var header2 = document.getElementById("header2-span");

    if (email != null && nome != null) {
        header1.style.display = 'none';
        header2.style.display = 'block';
        perfil_nome.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function validarSessao2() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var perfil_img = document.getElementById("perfil_img")
    var perfil_nome = document.getElementById("perfil_nome");
    var header1 = document.getElementById("header-span");
    var header2 = document.getElementById("header2-span");
    var footer1 = document.getElementById("footer-span");
    var footer2 = document.getElementById("footer2-span");

    if (email != null && nome != null) {
        header1.style.display = 'none';
        footer1.style.display = 'none';
        header2.style.display = 'block';
        footer2.style.display = 'block';

        if(email == 'ame-watson@animoview.com'){
            perfil_img.src = 'assets/amelia-starring.webp'
            perfil_img.classList.add("ame-special")
        }

        perfil_nome.innerHTML = nome;

        

    } else {
        header1.style.display = 'block';
        footer1.style.display = 'block';
        header2.style.display = 'none';
        footer2.style.display = 'none';
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("msgErro");
    divAguardar.innerHTML = "<img src='assets/ame-rolling.gif' style='height: 48px; width: 48px; padding-bottom: 12px;'>";
}

function finalizarAguardar() {
    var divAguardar = document.getElementById("msgErro");
    divAguardar.innerHTML = "";
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}
