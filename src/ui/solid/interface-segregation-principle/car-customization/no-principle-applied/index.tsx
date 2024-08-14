import { useState } from 'react'
import { ICar } from '../car/car'

import * as S from './styled'
import { ColorPicker } from '@/ui/shared/molecules/color-picker'
import { Options } from '../options'
import { Plate } from '../plate'

interface Props {
  carType: 'default' | 'with-options' | 'with-plate' | 'with-plate-and-options'
}

export const NoPrincipleApplied = ({ carType }: Props) => {
  const [car, setCar] = useState<ICar>({
    color: '#FFF'
  })

  const getOptions = () => {
    return [
      { 
        label: 'Bancos de couro', 
        checked: !!car.leatherSeats, 
        onClick: () => { 
          setCar(old => ({ ...old, leatherSeats: !old.leatherSeats })) 
        }
      },
      { 
        label: 'Multimídia', 
        checked: !!car.multimedia, 
        onClick: () => { 
          setCar(old => ({ ...old, multimedia: !old.multimedia })) 
        }
      },
      { 
        label: 'GPS Integrado', 
        checked: !!car.gps, 
        onClick: () => { 
          setCar(old => ({ ...old, gps: !old.gps })) 
        }
      }
    ]
  }

  return (
    <S.Container>
      {carType === 'default' &&
        <ColorPicker 
          value={car.color}
          onChange={(color) => { setCar(old => ({ ...old, color }))}}
        />
      }
      {carType === 'with-options' &&
        <>
          <ColorPicker 
            value={car.color}
            onChange={(color) => { setCar(old => ({ ...old, color }))}}
          />
          <Options 
            options={getOptions()}
          />
        </>
      }
      {carType === 'with-plate' &&
        <>
          <ColorPicker 
            value={car.color}
            onChange={(color) => { setCar(old => ({ ...old, color }))}}
          />
          <Plate 
            value={car.plate ?? ''}
            onChange={(plate) => { setCar(old => ({ ...old, plate }))}}
          />
        </>
      }
      {carType === 'with-plate-and-options' &&
        <>
          <ColorPicker 
            value={car.color}
            onChange={(color) => { setCar(old => ({ ...old, color }))}}
          />
          <Options 
            options={getOptions()}
          />
          <Plate 
            value={car.plate ?? ''}
            onChange={(plate) => { setCar(old => ({ ...old, plate }))}}
          />
        </>
      }
    </S.Container>
  )
}