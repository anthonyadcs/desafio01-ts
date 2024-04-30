import { DioAccount } from "./DioAccount"

export class AmountPlusTen extends DioAccount{
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  //Método que adiciona o valor de 10 a todo depósito feito pelas contas Amount Plus Ten.
  plusTen = (amount: number) : void =>{
    this.deposit(amount + 10)
    console.log(`Seu depósito de ${amount} foi acrescido de R$10.`)
  }
} 