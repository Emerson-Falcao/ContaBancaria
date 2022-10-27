import {Cadastro} from './Cadastro.js'

export class main{
    
    constructor(){
        document.getElementById('btnCad').onclick = this.cadastrar
    }

    cadastrar(){
        let cadastro = new Cadastro()
        cadastro.cadastrar()
    }
    
}

new main();
