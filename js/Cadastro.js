import {Conta} from './Conta.js' 

export class Cadastro{
    
    contas = []
    
    cadastrar(){
        const inputs = document.getElementsByTagName('input')
        let erros = this.validarCampos(inputs)
        if(!erros){
            let nrConta = Math.floor(1000 + Math.random() * 90000)
            this.contas.push(new Conta(inputs['name'].value,inputs['cpf'].value,inputs['tel'].value,inputs['password'].value,nrConta,0))
            console.log(this.contas[0])
        }
    }
    
    validarCampos(campos){
        let erros = ''
        for(let i = 0; campos.length>i; i++){
            if(campos[i].value == ''){
                erros += '<p>Preencha todos os campos!</p>'
                break
            }
        } 
        if(campos['password'].value != campos['passConf'].value){
            erros += '<p>Senhas não batem!</p>'
        }
        document.getElementById('alert').innerHTML = erros
        return erros
    }
}