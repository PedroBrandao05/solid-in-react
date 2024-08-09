import { useState } from 'react'
import { PaymentMethod } from './composite/payment-method'
import * as S from './styled'
import { SelectPaymentMethod } from './select-payment-method'
import { Button } from '@/ui/shared/atoms/button'
import { AreaCart, Item } from '../area-cart'

export const PrincipleApplied = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null)

  const items: Item[] = [
    { price: 5000, title: 'Curso Desenvolvedor Javascript do 0 aos 5K' }
  ]

  const totalPrice = items.map(item => item.price).reduce((a, b) => a + b)

  return (
    <S.Wrapper>
      <div className='section-left'>
        <SelectPaymentMethod 
          onSelect={(method) => { setSelectedPaymentMethod(method) }}
          selectedPaymentMethod={selectedPaymentMethod}
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
        priceVariables={selectedPaymentMethod ? selectedPaymentMethod.getPricesVariables(totalPrice) : []}
      />
    </S.Wrapper>
  )
}