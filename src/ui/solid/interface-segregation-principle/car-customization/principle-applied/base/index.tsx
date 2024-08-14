import { Dispatch, SetStateAction } from 'react'
import { IBaseCar } from '../../car/car'
import { ColorPicker } from '@/ui/shared/molecules/color-picker'

export interface BaseCarProps<T extends IBaseCar> {
  car: T

  setCar: Dispatch<SetStateAction<T>>
}

export const BaseCar = <T extends IBaseCar>({ car, setCar }: BaseCarProps<T>) => {
  return (
    <ColorPicker 
      onChange={color => { setCar(old => ({ ...old, color }))}}
      value={car.color}
    />
  )
}