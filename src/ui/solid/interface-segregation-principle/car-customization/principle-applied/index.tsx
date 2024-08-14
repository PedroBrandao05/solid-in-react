import { useState } from 'react'
import { ICarWithOptions } from '../car/car-with-options'
import { ICarWithPlate } from '../car/car-with-plate'
import { BaseCar } from './base'
import { withOptions } from './with-options'
import { withPlate } from './with-plate'
import { IBaseCar } from '../car/car'

export const CarWithOptions = withOptions(BaseCar)

export const CarWithPlate = withPlate(BaseCar)

export const CarWithPlateAndOptions = withPlate<ICarWithPlate & ICarWithOptions>(withOptions(BaseCar))

export const PrincipleApplied = () => {
  const [car, setCar] = useState<ICarWithOptions & ICarWithPlate & IBaseCar>({
    color: '#FFF',
    gps: false,
    leatherSeats: false,
    multimedia: false,
    plate: ''
  })

  return (
    <CarWithPlateAndOptions car={car} setCar={setCar} />
  )
}