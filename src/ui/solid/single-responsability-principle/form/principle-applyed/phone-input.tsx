import { useState } from 'react';
import { InputProps } from '.';
import { Input } from '@/ui/shared/atoms/input/input';

const PhoneInput = ({ setIsValid }: InputProps) => {
  const [value, setValue] = useState('')

  const phoneIsValid = (given: string) => {
    return (given.length >= 10 && given.length <= 15) 
  }

  return (
    <Input 
      placeholder='Insira seu Celular'
      onChange={(given) => {
        setValue(given.replace(/\D/g, ''))

        setIsValid(phoneIsValid(given.replace(/\D/g, '')))
      }}
      value={value}
    />
  )
}

export default PhoneInput