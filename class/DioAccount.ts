export abstract class DioAccount {
  //Atributos de todas as contas DioAccount
  private name: string;
  private readonly accountNumber: number;
  private balance: number;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = 0;
  }

  //Método para alteração de nome do usuário
  setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  }

  //Método que retorna o nome atual do usuário
  getName = (): string => {
    return this.name;
  }

  //Método que realiza o depósito do valor enviado por parâmetro ao saldo, com base na validade de seu status.
  deposit = (depositAmount: number) :number => {
    if(this.validateStatus()){
      this.balance += depositAmount;
      console.log(`Depósito realizado com sucesso! Seu saldo total é R$${this.balance}`);
      return this.balance;
    }

    throw new Error('Erro no Deposit')
  }

  //Método que realiza o saque do valor enviado por parâmetro ao saldo do usuário, com base na validade de seu status e se o valor solicitado para saque é menor do que se encontra no saldo atual.
  withdraw = (withdrawAmount: number): number => {
    if(this.validateStatus() && this.balance > withdrawAmount){
      this.balance -= withdrawAmount;
      console.log(`Saque realizado com sucesso! Agora seu saldo total é R$${this.balance}`)
      return this.balance
    }

    throw new Error('Erro no Withdraw')
  }

  //Método que informa o saldo atual do cliente
  getBalance = (): void => {
    console.log(this.balance);
  }

  //Método que avalia o estado do cliente para realização de outros métodos.
  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
