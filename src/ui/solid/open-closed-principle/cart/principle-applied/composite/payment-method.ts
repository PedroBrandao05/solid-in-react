import { PriceVariable } from '../../area-cart/price-variable'

export abstract class PaymentMethod {
  discount: number = 0

  installments: number = 0

  deposit: number = 0

  discountLabel: string = ''

  withDiscount (given: number) {
    this.discount = given

    return this
  }

  withInstallments (given: number) {
    this.installments = given

    return this
  }

  withDeposit (given: number) {
    this.deposit = given

    return this
  }
  
  withDiscountLabel (given: string) {
    this.discountLabel = given

    return this
  }

  abstract getPricesVariables (totalPrice: number): PriceVariable[]

  abstract getLabel (): string
}