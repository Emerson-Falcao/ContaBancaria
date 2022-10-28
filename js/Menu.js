import { Operacoes} from "./Operacoes.js"

export class Menu{
    constructor(){

    }
    
    criarMenu(){
        let opcaoCadastro = this.criarOpcao('Cadastro')
        opcaoCadastro.id = 'menuCad'
        let opcaoOperacoes = this.criarOpcao('Operações')
        opcaoOperacoes.id = 'menuOpe'
        let menu = opcaoCadastro.outerHTML+opcaoOperacoes.outerHTML
        document.getElementsByTagName('main')[0].innerHTML = menu
        document.getElementById('menuCad').onclick = this.onClickCadastro
        document.getElementById('menuOpe').onclick = this.onClickOperacoes
    }
    
    criarOpcao(texto){
        let opcaoMenu = document.createElement('div')
        opcaoMenu.classList = 'divOpcao'
        opcaoMenu.innerHTML = `<p> ${texto}</p>`
        let div = document.createElement('div')
        div.classList = 'divOrnamento'
        opcaoMenu.appendChild(div)
        return opcaoMenu
    }

    onClickCadastro(){
        document.getElementsByTagName('main')[0].innerHTML = `<h1>CADASTRO</h1>
        <form class="form" id="form">
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name" placeholder="Nome Completo">
            <label for="cpf">CPF:</label>
            <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00">
            <label for="tel">Telefone:</label>
            <input type="tel" name="tel" id="tel" placeholder="(00)00000-0000">
            <label for="password">Senha:</label>
            <input type="password" name="password" id="password"> 
            <label for="passConf">Confirmar Senha:</label>
            <input type="password" name="passConf" id="passConf">
            <div class="buttons"> 
                <input type="button" class="btnCad" id="btnCad" value="Cadastrar">
                <input type="reset" class="btnLimpar" value="Limpar">
            </div>
            <div class="alert" id="alert"></div>
        </form>`
    }

    onClickOperacoes(){
        let operacoes = new Operacoes()
        operacoes.createOperacoes()
    }

    
}