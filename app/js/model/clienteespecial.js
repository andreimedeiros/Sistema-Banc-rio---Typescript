class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        /*this._nome = nome;
         this._cpf = cpf;
         this._conta = conta;
     this._ContaEspecial = ContaEspecial;
*/
        this._clientesdependentes = new Array();
    }
}
