import { Dropdown } from '@/ui/shared/molecules/dropdown'
import { AreaCart, Item } from '../area-cart'
import * as S from './styled'
import { useState } from 'react'
import { Button } from '@/ui/shared/atoms/button'
import { PriceVariable } from '../area-cart/price-variable'

interface PaymentMethod {
  label: string

  discount: number

  deposit: number

  installments: number
}

export const NoPrincipleApplied = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null)

  const items: Item[] = [
    { price: 5000, title: 'Curso Desenvolvedor Javascript do 0 aos 5K' }
  ]

  const paymentMethods: PaymentMethod[] = [
    { label: 'Entrada 50% + Parcelas 25x', deposit: 50, discount: 0, installments: 28 },
    { label: 'Pix a vista (20% Desconto)', deposit: 0, discount: 20, installments: 0 },
    { label: 'Bitcoin (60% Desconto)', deposit: 0, discount: 60, installments: 0 },
    { label: 'Entrada 75% + Parcelas 12x', deposit: 75, discount: 0, installments: 12 }
  ]

  const getPriceVariables = (): PriceVariable[] => {
    if (!selectedPaymentMethod) return []

    const totalPrice = items.map(item => item.price).reduce((a, b) => a + b)

    if (selectedPaymentMethod.discount) {
      return [{ label: selectedPaymentMethod.label, price: totalPrice * (selectedPaymentMethod.discount / 100) }]
    }

    const depositPrice = totalPrice * (selectedPaymentMethod.deposit / 100)

    return [
      { 
        label: `Entrada ${selectedPaymentMethod.deposit}%`, 
        price: depositPrice 
      },
      { 
        label: `Parcelas ${selectedPaymentMethod.installments}x`, 
        price: Math.ceil((totalPrice - depositPrice) / selectedPaymentMethod.installments)
      }
    ]
  }

  return (
    <S.Wrapper>
      <div className='section-left'>
        <Dropdown<PaymentMethod>
          items={paymentMethods}
          onSelect={(item) => {
            setSelectedPaymentMethod(item)
          }}
          selectedItem={selectedPaymentMethod ? selectedPaymentMethod.label : 'Escolha um método de pagamento'}
          itemLabelKey='label'
        />
        <Button 
          label='Salvar'
          onClick={() => {
            // efetuar compra
          }}
        />
      </div>
      <AreaCart 
        items={items}
        priceVariables={getPriceVariables()}
      />
    </S.Wrapper>
  )
}
