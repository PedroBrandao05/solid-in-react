import { PaymentMethod } from './payment-method'
import { PriceVariable } from '../../area-cart/price-variable'

export class DepositInstallmentsPaymentMethod extends PaymentMethod {
  static CreateWithDepositAndInstallments (deposit: number, installments: number) {
    return new DepositInstallmentsPaymentMethod()
      .withDeposit(deposit)
      .withInstallments(installments)
  }
  
  getPricesVariables(totalPrice: number): PriceVariable[] {
    const depositPrice = totalPrice * (this.deposit / 100)

    return [
      { label: `Entrada de ${this.deposit}%`, price: depositPrice },
      { label: `Parcelas ${this.installments}x`, price: (totalPrice - depositPrice) / this.installments }
    ]
  }

  getLabel(): string {
    return `Entrada de ${this.deposit}% + Parcelas ${this.installments}x`
  }
}
