import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Leonardo", 12345678900);

const contaCorrenteLeonardo = new ContaCorrente(1001, cliente1);
contaCorrenteLeonardo.depositar(500);
contaCorrenteLeonardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteLeonardo);
