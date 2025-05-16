class ContaBancaria {
    constructor(depositar , sacar , verSaldo) {
        this.depositar = depositar;
        this.sacar = sacar;
        this.verSaldo = verSaldo;
    
    }
mostrarDados(){
console.log(`depositar ${this.depositar}, sacar R$ ${this.sacar},verSaldo: ${this.verSaldo} `);
    }
}
vender(qtd){ 
    if(qtd <= this.verSaldo){
       this.verSaldo -= qtd;
       console.log('Venda realizada. Quantidade atual ${this.quantidade} ')
    }
    }
    else {
        console.log("Estoque insulficiente para venda");
    }
    repor(qtd){
        this.verSaldo += qtd;
        console.log('Reposição feita. quantidade atual: ${this.quantidade}');
    }

let conta = new ContaBancaria("Ana",1000);
conta.sacar(200); // Saque de 200 realizado
conta.verSaldo(); // Saldo atual : 800
conta.sacar(1000);// Saldo insulficiente
//ContaBancaria.mostrarDados();
//ContaBancaria.VerSaldo(15);
produto.repor(20);

let produto2