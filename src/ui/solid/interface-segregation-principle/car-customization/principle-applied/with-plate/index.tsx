import { IBaseCar } from '../../car/car'
import { ICarWithPlate } from '../../car/car-with-plate'
import { Plate } from '../../plate'
import { BaseCarProps } from '../base'

export const withPlate = <T extends ICarWithPlate>(BaseCar: React.FC<BaseCarProps<T & IBaseCar>>) => {
  return (props: BaseCarProps<T & IBaseCar>) => {
    return (
      <>
        <Plate 
          onChange={(plate) => { props.setCar(old => ({ ...old, plate }))}}
          value={props.car.plate}
        />
        <BaseCar {...props} />
      </>
    )
  }
}