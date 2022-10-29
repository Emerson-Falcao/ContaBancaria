import {Cadastro} from './Cadastro.js'
import {Menu} from './Menu.js'

export class main{

    constructor(){
        document.getElementById('btnCad').addEventListener('click',this.cadastrar)
        document.getElementById('btnCad').contas = []
        document.getElementById('menuBtn').onclick = this.menu
    }

    menu(){
        let menu = new Menu(document.getElementById('btnCad').contas)
        menu.criarMenu()
    }

    cadastrar(event){
        let cadastro = new Cadastro()
        event.currentTarget.contas.push(cadastro.cadastrar())
    }
    
}

new main();
