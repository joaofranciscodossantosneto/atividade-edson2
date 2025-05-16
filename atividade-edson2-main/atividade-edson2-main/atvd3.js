class ContaBancaria {
    constructor(nome, saldoInicial) {
        this.nome = nome;
        this.saldo = saldoInicial; // A conta tem um saldo inicial
    }

    mostrarDados() {
        console.log(`Titular: ${this.nome}, Saldo: R$ ${this.saldo}`);
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }

    verSaldo() {
        console.log(`Saldo atual: R$ ${this.saldo}`);
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
    }
}

// Criando uma conta bancária
let conta = new ContaBancaria("Ana", 1000);
conta.sacar(200);  // Saque de 200 realizado
conta.verSaldo();  // Saldo atual: R$ 800
conta.sacar(1000); // Saldo insuficiente
conta.depositar(500);  // Depósito de 500 realizado
// conta.verSaldo();  // Saldo atual: R$ 1300

// Mostrar dados da conta
//conta.mostrarDados();  // Titular: Ana, Saldo: R$ 1300
