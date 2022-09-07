let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
//criar um objeto da classe Clientes e inserir clientes dentro, listar, remover e pesquisar 
let novosClientes = new Clientes();
let cliente01 = new Cliente("Ândrei", "111.222.333-44", new Conta("001", 100));
let cliente02 = new Cliente("Ray", "555.666.777-88", new Conta("002", 150));
novosClientes.inserir(cliente01);
novosClientes.inserir(cliente02);
console.log(novosClientes.listar());
novosClientes.remover("111.222.333-44");
console.log(novosClientes.pesquisarPorCPF("555.666.777-88"));
