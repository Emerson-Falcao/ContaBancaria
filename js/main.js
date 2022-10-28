import {Cadastro} from './Cadastro.js'
import {Menu} from './Menu.js'

export class main{
    
    constructor(){
        document.getElementById('btnCad').onclick = this.cadastrar
        document.getElementById('menuBtn').onclick = this.menu
    }

    menu(){
        let menu = new Menu()
        menu.criarMenu()
    }

    cadastrar(){
        let cadastro = new Cadastro()
        cadastro.cadastrar()
    }
    
}

new main();
