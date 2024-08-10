import { useEffect, useState } from 'react'
import { CarrouselBaseIcon } from '../../icons/carrousel-base'
import * as S from './styled'

interface Props<T> {
  items: T[]

  itemImageKey: keyof T

  onItemChange: (item: T) => void
}

export const Carrousel = <T extends Object>({ itemImageKey, items: _items, onItemChange }: Props<T>) => {
  const [items, setItems] = useState(_items)

  const moveForward = () => {
    const lastItem = [...items].pop()

    if (!lastItem) return

    setItems([lastItem, ...items.slice(0, items.length - 1)])
  }

  const moveBackward = () => {
    const [firstItem] = [...items]

    if (!firstItem) return

    setItems([...items.slice(1, items.length), firstItem])
  }

  useEffect(() => {
    const [_, currentItem] = items

    onItemChange(currentItem)
  }, [items])

  return (
    <S.Wrapper>
      <CarrouselBaseIcon className='base-carrousel'/>
      <S.Items>
        {items.map((item, index) => 
          <img 
            src={`${item[itemImageKey]}`}
            className={index === 2 ? 'item current' : 'item'}
            key={index}
            onClick={() => {
              if (index === 0) moveBackward()

              if (index === 2) moveForward()
            }}
          />
        )}
      </S.Items>
    </S.Wrapper>
  )
}
