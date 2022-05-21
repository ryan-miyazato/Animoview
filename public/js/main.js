class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
        <div class="container">
            <img src="assets/logo3.png" alt="Logo Animoview" class="logo">
            <ul class="navBar">
                <li>
                <a href="" id="home_nav">Home</a>
                </li>
                <li>
                    <a href="" id="animes_nav">Animes</a>
                </li>
                <li>
                    <a href="" id="forum_nav">Fórum</a>
                </li>
                <li>
                    <a href="" id="minhalista_nav">Minha Lista</a>
                </li>
            </ul>
            <div class="registro">
                <a class="botao_cadastro" href="">Cadastro</a>
                <div class="linha"></div>
                <a class="botao_login" href="">Login</a>
            </div>
        </div>
        </div>`
    }
}

customElements.define('my-header', myHeader);