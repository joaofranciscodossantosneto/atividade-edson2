class SimuladorCarro {
    constructor(modelo,cor, velocidadeAtual) {
        this.modelo = modelo;
        this.cor = cor;
        this.velocidadeAtual = 0; // Definindo a velocidade inicial como 0
    }

    acelerar(kmh) {
        this.velocidade += kmh;
        console.log(`A velocidade atual é ${this.velocidade} km/h`);
    }

    frear(kmh) {
        this.velocidade -= kmh;
        if (this.velocidade < 0) {
            this.velocidade = 0; // A velocidade não pode ser negativa
        }
        console.log(`A velocidade atual é ${this.velocidade} km/h`);
    }

    mostrarStatus() {
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Velocidade: ${this.velocidade} km/h`);
    }
}

// Criando um novo carro
let carro = new SimuladorCarro("Civic", "preto");

carro.acelerar(30);  // A velocidade atual é 30 km/h
carro.frear(10);     // A velocidade atual é 20 km/h
carro.mostrarStatus(); // Modelo: Civic, Cor: preto, Velocidade: 20 km/h
