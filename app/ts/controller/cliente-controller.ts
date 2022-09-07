class ClienteController {

    private nome: HTMLInputElement;
    private cpf: HTMLInputElement;
    private conta: HTMLInputElement;
    private saldo: HTMLInputElement;
    private clientes: Clientes;

   // Desenvolver a classe ClienteController, que fará a ponte entre a tela e as ações que podem ser feitas em clientes
    constructor() {
        this.nome = <HTMLInputElement>document.querySelector("#nome");
        this.cpf = <HTMLInputElement>document.querySelector("#cpf");
        this.conta = <HTMLInputElement>document.querySelector("#conta");
        this.saldo = <HTMLInputElement>document.querySelector("#saldo");
        this.clientes = new Clientes();
    }


    inserir(evento: Event) {
        evento.preventDefault();
        //let novaConta = new Conta(this.inputNumero.value,
        //  parseFloat(this.inputSaldo.value));
        let conta = new Conta(this.conta.value, parseFloat(this.saldo.value));
        let novoCliente = new Cliente(this.nome.value, this.cpf.value, conta);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }


    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}