import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AmountPlusTen } from './class/AmountPlusTen'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const amountPlusTen: AmountPlusTen = new AmountPlusTen('Recebo mais 10', 30)

//métodos do peopleAccount
//métodos do peopleAccount
//métodos do peopleAccount
peopleAccount.setName('Anthony')
// console.log(peopleAccount)
console.log(peopleAccount.getName())
peopleAccount.deposit(1000)
// console.log(peopleAccount)
peopleAccount.withdraw(900)
// console.log(peopleAccount)
console.log(peopleAccount.getBalance())

//métodos do companyAccount
//métodos do companyAccount
//métodos do companyAccount
companyAccount.setName('Anthony 2')
// console.log(companyAccount)
console.log(companyAccount.getName())
companyAccount.deposit(1000)
// console.log(companyAccount)
companyAccount.withdraw(900)
// console.log(companyAccount)
console.log(companyAccount.getBalance())
// console.log(companyAccount)
companyAccount.getLoan(1000)
// console.log(companyAccount)

//métodos do amountPlusTen
//métodos do amountPlusTen
//métodos do amountPlusTen
amountPlusTen.setName('Anthony 3')
// console.log(amountPlusTen)
console.log(amountPlusTen.getName())
amountPlusTen.deposit(1000)
// console.log(amountPlusTen)
amountPlusTen.withdraw(900)
// console.log(amountPlusTen)
console.log(amountPlusTen.getBalance())
// console.log(amountPlusTen)
amountPlusTen.plusTen(100)
// console.log(amountPlusTen)

console.clear()
console.log(amountPlusTen)
console.log(companyAccount)
console.log(amountPlusTen)