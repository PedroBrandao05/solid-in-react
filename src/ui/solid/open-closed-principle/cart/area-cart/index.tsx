import * as S from './styled'
import { PriceVariable } from './price-variable'
import { CartIcon } from '@/ui/shared/icons/cart'

export interface Item {
  price: number,

  title: string
}

interface Props {
  priceVariables: PriceVariable[]

  items: Item[]
}

export const AreaCart = ({ priceVariables, items }: Props) => {
  return (
    <S.Card>
      <div className='top-section'>
        <h1>Itens</h1>
        <CartIcon />
      </div>
      <ul className='section-items'>
        {items.map((item, index) => 
          <li className='item' key={index}>
            <span>{item.title}</span>
            <span>{item.price}</span>
          </li>
        )}
      </ul>

      <div className='total-price'>
        <h3>Total</h3>
        <h3>{items.map(item => item.price).reduce((a, b) => a + b)}</h3>
      </div>

      <ul className='price-variables'>
        {!priceVariables.length && <span>Selecione um método de pagamento</span>}
        {priceVariables.map((priceVariable, index) => 
          <li className='item' key={index}>
            <span>{priceVariable.label}</span>
            <span>{priceVariable.price}</span>
          </li>
        )}
      </ul>
    </S.Card>
  )
}
