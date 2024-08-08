import { useState } from 'react'
import { InputProps } from '.'
import { Input } from '@/ui/shared/atoms/input/input'

const EmailInput = ({ setIsValid }: InputProps) => {
  const [value, setValue] = useState('')

  const emailIsValid = (given: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(given)
  }

  return (
    <Input 
      placeholder='Insira seu Email'
      onChange={(given) => {
        setValue(given)

        setIsValid(emailIsValid(given))
      }}
      value={value}
    />
  )
}

export default EmailInput