import { PaymentMethod } from './payment-method'
import { PriceVariable } from '../../area-cart/price-variable'

export class CashPaymentMethod extends PaymentMethod {
  static CreateWithDiscount (discount: number, label: string) {
    return new CashPaymentMethod()
      .withDiscount(discount)
      .withDiscountLabel(label)
  }

  getPricesVariables(totalPrice: number): PriceVariable[] {
    return [
      { label: this.discountLabel, price: totalPrice * (this.discount / 100)}
    ]
  }

  getLabel(): string {
    return `${this.discountLabel} (${this.discount}% Desconto)`
  }
}