class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
        <div class="container">
            <img src="assets/animoview-logo.png" alt="Logo Animoview" class="logo" onclick="window.location = 'index.html'">
            <ul class="navBar">
                <li>
                <a href="index.html" class="navItem" id="home_nav">Home</a>
                </li>
                <li>
                    <a href="animes.html" class="navItem" id="animes_nav">Animes</a>
                </li>
                <li>
                    <a href="pesquisa.html" class="navItem" id="pesquisa_nav">Pesquisa</a>
                </li>
                <li>
                    <a href="forum.html" class="navItem" id="forum_nav">Fórum</a>
                </li>
                <li>
                    <a href="minhalista.html" class="navItem" id="minhalista_nav">Minha Lista</a>
                </li>
            </ul>
            <div class="registro">
                <a class="botao-cadastro" href="cadastro.html">Cadastro</a>
                <div class="linha"></div>
                <a class="botao-login" href="login.html">Login</a>
            </div>
        </div>
        </div>`
    }
}

customElements.define('my-header', myHeader);

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <div class="container">
                <ul>
                    <img class="logo" src="assets/animoview-logo.png">
                    <a href="index.html">Home</a>
                    <a href="pesquisa.html">Pesquisa</a>
                    <a href="">Suporte</a>
                    <a href="">Termos de Serviço</a>
                    <a href="">Privacidade</a>
                    <a href="">Cookies</a>
                </ul>
                <span>
                    <div>Ryan Yuji Miyazato (RA 02221041) 1CCO, 2022</div>
                    <div>Animoview © 2022</div>
                </span>
            </div>
        </div>`
    }
}

customElements.define('my-footer', myFooter);


// HEADER E FOOTER 2

class myHeader2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
        <div class="container">
            <img src="assets/animoview-logo.png" alt="Logo Animoview" class="logo" onclick="window.location = 'animes.html'">
            <ul class="navBar">
            <li>
            <a href="animes.html" class="navItem" id="animes2_nav">Animes</a>
            </li>
            <li>
            <a href="pesquisa.html" class="navItem" id="pesquisa2_nav">Pesquisa</a>
            </li>
            <li>
            <a href="forum.html" class="navItem" id="forum2_nav">Fórum</a>
            </li>
            <li>
            <a href="minhalista-logado.html" class="navItem" id="minhalista2_nav">Minha Lista</a>
            </li>
            <li>
            <a href="perfil.html" class="navItem" id="perfil_nav">Perfil</a>
            </li>
            </ul>
            <a href="perfil.html" class="perfil-info">
                <img class="perfil-img" id="perfil_img" src="assets/icone-logo.png">
                <span class="perfil-nome" id="perfil_nome">user</span>
                <div class="perfil-logout">
                    <button onclick="limparSessao()" class="botao-logout">Sair</button> 
                </div>
            </a>
            
        </div>
        </div>`
    }
}

customElements.define('my-header2', myHeader2);

class myFooter2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <div class="container">
                <ul>
                    <img class="logo" src="assets/animoview-logo.png">
                    <a href="perfil.html">Perfil</a>
                    <a href="pesquisa.html">Pesquisa</a>
                    <a href="">Suporte</a>
                    <a href="">Termos de Serviço</a>
                    <a href="">Privacidade</a>
                    <a href="">Cookies</a>
                </ul>
                <span>
                    <div>Ryan Yuji Miyazato (RA 02221041) 1CCO, 2022</div>
                    <div>Animoview © 2022</div>
                </span>
            </div>
        </div>`
    }
}

customElements.define('my-footer2', myFooter2);


