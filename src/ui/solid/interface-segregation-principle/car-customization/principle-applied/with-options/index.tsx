import { IBaseCar } from '../../car/car'
import { ICarWithOptions } from '../../car/car-with-options'
import { Options } from '../../options'
import { BaseCarProps } from '../base'

export const withOptions = <T extends ICarWithOptions>(BaseCar: React.FC<BaseCarProps<T & IBaseCar>>) => {
  return (props: BaseCarProps<T & IBaseCar>) => {

    const getOptions = () => {
      return [
        { 
          label: 'Bancos de couro', 
          checked: !!props.car.leatherSeats, 
          onClick: () => { 
            props.setCar(old => ({ ...old, leatherSeats: !old.leatherSeats })) 
          }
        },
        { 
          label: 'Multimídia', 
          checked: !!props.car.multimedia, 
          onClick: () => { 
            props.setCar(old => ({ ...old, multimedia: !old.multimedia })) 
          }
        },
        { 
          label: 'GPS Integrado', 
          checked: !!props.car.gps, 
          onClick: () => { 
            props.setCar(old => ({ ...old, gps: !old.gps })) 
          }
        }
      ]
    }

    return (
      <>
        <Options options={getOptions()} />
        <BaseCar {...props} />
      </>
    )
  }
}