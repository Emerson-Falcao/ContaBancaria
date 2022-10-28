export class Operacoes{
    constructor(){

    }

    createOperacoes(){
        let radios = this.createRadios()
        let inputs = this.createInputs()
        let opcoes = radios+inputs
        document.getElementsByTagName('main')[0].innerHTML = opcoes
        document.getElementById('Deposito').addEventListener('change', this.validarCampo)
        document.getElementById('Saque').addEventListener('change', this.validarCampo)
        document.getElementById('Saldo').addEventListener('change', this.validarCampo)
    }

    validarCampo(event){
        if(event.target.id == 'Saldo'){
            document.getElementById('Valor').disabled = true
        }else{
            document.getElementById('Valor').disabled = false
        }
    }

    createRadios(){
        let opcaoSaque = this.criarOpcao('Saque')
        let opcaoDeposito = this.criarOpcao('Deposito')
        let opcaoSaldo = this.criarOpcao('Saldo')
        return opcaoSaque.outerHTML+opcaoDeposito.outerHTML+opcaoSaldo.outerHTML
    }

    createInputs(){
        let valor = this.createInput('number','Valor')
        let conta = this.createInput('text','Conta')
        let senha = this.createInput('password','Senha')
        return valor+conta+senha
    }

    createInput(type,texto){
        let div = document.createElement('div')
        div.classList = 'divInput'
        let input = document.createElement('input')
        input.setAttribute('type',type)
        input.id = texto
        let label = document.createElement('label')
        label.setAttribute('for',texto)
        label.innerText = texto

        div.appendChild(label)
        div.appendChild(input)
        return div.outerHTML
    }

    criarOpcao(texto){
        let opcaoMenu = document.createElement('div')
        opcaoMenu.classList = 'divOpcao'

        let opcaoRadio = document.createElement('input')
        opcaoRadio.classList = 'opcaoRadio'
        opcaoRadio.setAttribute('type','radio')
        opcaoRadio.name = 'opcao'
        opcaoRadio.id = texto
        opcaoRadio.value = texto

        let labelRadio = document.createElement('label')
        labelRadio.setAttribute('for',texto)
        labelRadio.innerText = texto


        opcaoMenu.appendChild(opcaoRadio)
        opcaoMenu.appendChild(labelRadio)
        let div = document.createElement('div')
        div.classList = 'divOrnamento'
        opcaoMenu.appendChild(div)
        return opcaoMenu
    }

}