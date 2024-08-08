import { useState } from 'react'
import { InputProps } from '.'
import { Input } from '@/ui/shared/atoms/input/input'

const CpfInput = ({ setIsValid }: InputProps) => {
  const [value, setValue] = useState('')

  const cpfIsValid = (given: string) => {
    if (given.length !== 11) return false
    
    if (/^(\d)\1{10}$/.test(given)) return false

    const calculateCheckDigit = (given: string, factor: number) => {
      let total = 0
      for (let i = 0; i < factor - 1; i++) {
          total += parseInt(given.charAt(i)) * (factor - i)
      }
      const remainder = (total * 10) % 11
      return remainder === 10 ? 0 : remainder
    }

    const digit1 = calculateCheckDigit(given, 10)
    const digit2 = calculateCheckDigit(given, 11)

    return digit1 === parseInt(given.charAt(9)) && digit2 === parseInt(given.charAt(10))
  }

  return (
    <Input 
      placeholder='Insira seu CPF'
      onChange={(given) => {
        setValue(given.replace(/\D/g, ''))

        setIsValid(cpfIsValid(given.replace(/\D/g, '')))
      }}
      value={value}
    />
  )
}

export default CpfInput