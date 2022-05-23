class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
        <div class="container">
            <img src="assets/logo3.png" alt="Logo Animoview" class="logo">
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
                <a class="botao-cadastro" href="">Cadastro</a>
                <div class="linha"></div>
                <a class="botao-login" href="">Login</a>
            </div>
        </div>
        </div>`
    }
}

customElements.define('my-header', myHeader);