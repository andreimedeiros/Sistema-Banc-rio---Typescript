class ClienteController {
    // Desenvolver a classe ClienteController, que fará a ponte entre a tela e as ações que podem ser feitas em clientes
    constructor() {
        this.nome = document.querySelector("#nome");
        this.cpf = document.querySelector("#cpf");
        this.conta = document.querySelector("#conta");
        this.saldo = document.querySelector("#saldo");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        //let novaConta = new Conta(this.inputNumero.value,
        //  parseFloat(this.inputSaldo.value));
        let conta = new Conta(this.conta.value, parseFloat(this.saldo.value));
        let novoCliente = new Cliente(this.nome.value, this.cpf.value, conta);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
