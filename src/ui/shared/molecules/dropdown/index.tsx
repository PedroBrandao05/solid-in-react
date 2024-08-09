import { useState } from 'react'
import { ArrowDown } from '../../icons/arrow-down'
import * as S from './styled'

interface Props<T> {
  items: T[]

  itemLabelKey?: keyof T

  selectedItem: string

  onSelect: (item: T) => void
}

export const Dropdown = <T extends Object>({ items, selectedItem, itemLabelKey, onSelect }: Props<T>) => {
  const [open, setOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.Input onClick={() => { setOpen(!open) }}>
        <span>{selectedItem}</span>
        <ArrowDown />
      </S.Input>
      <S.Dropdown open={open}>
        {items.map((item, index) =>
          <span 
            onClick={() => { onSelect(item) }}
            key={index}
            className='item'
          >
            {typeof item === 'string' && item}
            {(item instanceof Object && itemLabelKey) && `${item[itemLabelKey]}`}
          </span>
        )}
      </S.Dropdown>
    </S.Wrapper>
  )
}