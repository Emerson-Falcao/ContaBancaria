export class Operacoes{
    constructor(contas){    
        this.contas = contas
    }

    createOperacoes(){
        let radios = this.createRadios()
        let inputs = this.createInputs()
        let buttons = this.createButtons()
        let opcoes = radios+inputs+buttons
        document.getElementsByTagName('main')[0].innerHTML = `<form class="form" id="form">${opcoes}</form>`
        document.getElementById('Deposito').addEventListener('change', this.validarCampo)
        document.getElementById('Saque').addEventListener('change', this.validarCampo)
        document.getElementById('Saldo').addEventListener('change', this.validarCampo)
        document.getElementById('btnCad').addEventListener('click',this.validarOperacao)
        document.getElementById('btnCad').contas = this.contas
    }

    validarOperacao(event){
        let contas = event.currentTarget.contas
        let nrConta = document.getElementById('Conta').value
        let senha = document.getElementById('Senha').value
        let conta = contas.find((c) => c.conta == nrConta)
        if(conta && conta.senha === senha){
            if(document.getElementById('Saque').checked){
                this.realizarSaque()
            }
            if(document.getElementById('Deposito').checked){
                this.realizarDeposito()
            }
            if(document.getElementById('Saldo').checked){
                this.consultarSaldo()
            }
        }else{
            alert('Dados Incorretos')
        }

    }

    validarCampo(event){
        if(event.target.id == 'Saldo'){
            document.getElementById('Valor').disabled = true
        }else{
            document.getElementById('Valor').disabled = false
        }
    }

    createButtons(){
        let divButtons = document.createElement('div')
        divButtons.classList = 'buttons'
        let buttonConfirm = document.createElement('input')
        buttonConfirm.type = 'button'
        buttonConfirm.value = 'Confirma'
        buttonConfirm.classList = 'btnCad'
        buttonConfirm.id = 'btnCad'
        let buttonLimpar = document.createElement('input')
        buttonLimpar.type = 'reset'
        buttonLimpar.value = 'Limpar'
        buttonLimpar.classList = 'btnLimpar'
        divButtons.appendChild(buttonConfirm)
        divButtons.appendChild(buttonLimpar)

        return divButtons.outerHTML
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

    realizarSaque(){
        alert('Saque')
    }

    realizarDeposito(){

    }

    consultarSaldo(){

    }

}