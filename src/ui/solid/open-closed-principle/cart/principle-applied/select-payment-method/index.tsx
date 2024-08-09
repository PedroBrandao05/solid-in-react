import { Dropdown } from '@/ui/shared/molecules/dropdown'
import { CashPaymentMethod } from '../composite/cash'
import { DepositInstallmentsPaymentMethod } from '../composite/deposit-installments'
import { PaymentMethod } from '../composite/payment-method'

interface Props {
  onSelect: (method: PaymentMethod) => void

  selectedPaymentMethod: PaymentMethod | null
}

interface PaymentMethodItem {
  label: string

  method: PaymentMethod
}

export const SelectPaymentMethod = ({ onSelect, selectedPaymentMethod }: Props) => {
  const methods: PaymentMethod[] = [
    DepositInstallmentsPaymentMethod.CreateWithDepositAndInstallments(50, 25),
    CashPaymentMethod.CreateWithDiscount(20, 'Pix a vista'),
    CashPaymentMethod.CreateWithDiscount(60, 'Bitcoin'),
    DepositInstallmentsPaymentMethod.CreateWithDepositAndInstallments(75, 12)
  ]

  return (
    <Dropdown<PaymentMethodItem>
      items={methods.map(method => ({ label: method.getLabel(), method }))}
      selectedItem={selectedPaymentMethod ? selectedPaymentMethod.getLabel() : 'Selecione um método de pagamento'}
      itemLabelKey={'label'}
      onSelect={(item) => {
        onSelect(item.method)
      }}
    />
  )
}