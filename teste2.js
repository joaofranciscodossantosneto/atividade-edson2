class Livro {
  
  #titulo;
  #autor;
  #disponivel;

  
  constructor(titulo, autor) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#disponivel = true;  
  }

  
  emprestar() {
    if (this.#disponivel) {
      this.#disponivel = false;
      console.log(`${this.#titulo} foi emprestado.`);
    } else {
      console.log(`${this.#titulo} já está emprestado.`);
    }
  }

  
  devolver() {
    if (!this.#disponivel) {
      this.#disponivel = true;
      console.log(`${this.#titulo} foi devolvido.`);
    } else {
      console.log(`${this.#titulo} já está disponível.`);
    }
  }

  
  getInfo() {
    return `${this.#titulo} por ${this.#autor} - ${this.#disponivel ? "Disponível" : "Indisponível"}`;
  }

  
  isDisponivel() {
    return this.#disponivel;
  }
}


const livro1 = new Livro("Dom Casmurro", "Machado de Assis");

console.log(livro1.getInfo());  

livro1.emprestar();
console.log(livro1.isDisponivel());  

livro1.devolver();
console.log(livro1.isDisponivel());  
