import { Carrousel } from '@/ui/shared/molecules/carrousel'
import { Chicken } from './animals/chicken'
import { Shark } from './animals/shark'
import { Turtle } from './animals/turtle'
import * as S from './styled'
import { Animal } from './animals/animal'
import { Button } from '@/ui/shared/atoms/button'
import { useState } from 'react'

export const PrincipleApplied = () => {
  const [currentAnimal, setCurrentAnimal] = useState(new Turtle())

  const animals = [new Chicken(), new Turtle(), new Shark()]

  return (
    <S.Wrapper>
      <Carrousel<Animal>
        itemImageKey='picture'
        items={animals}
        onItemChange={(animal) => { setCurrentAnimal(animal) }}
      />
      <Button 
        label='Ver som'
        onClick={currentAnimal.emitSound}
      />
    </S.Wrapper>
  )
}