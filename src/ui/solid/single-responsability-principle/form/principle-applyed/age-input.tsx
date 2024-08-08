import { useState } from 'react'
import { InputProps } from '.'
import { Input } from '@/ui/shared/atoms/input/input'

const AgeInput = ({ setIsValid }: InputProps) => {
  const [value, setValue] = useState('')

  const ageIsValid = (given: string) => {
    return (parseInt(given) >= 18)
  }

  return (
    <Input 
      placeholder='Insira sua Idade'
      onChange={(given) => {
        setValue(given.replace(/\D/g, ''))

        setIsValid(ageIsValid(given.replace(/\D/g, '')))
      }}
      value={value}
    />
  )
}

export default AgeInput