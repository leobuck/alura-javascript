import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Leonardo", 12345678900);

const cliente2 = new Cliente("Alice", 12345678901);

const contaCorrenteLeonardo = new ContaCorrente(1001, cliente1);
contaCorrenteLeonardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteLeonardo.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);
