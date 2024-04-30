import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  //Método para adição de valor de empréstimo ao balanço da Company Account
  getLoan = (loanAmount: number): void => {
      this.deposit(loanAmount);
      console.log(`Empréstimo de R$${loanAmount} realizado com sucesso`);
  }
}
