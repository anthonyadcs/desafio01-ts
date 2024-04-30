import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  //Atributo que insera o ID do documento na criação de uma People Account
  private doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }
}