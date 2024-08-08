import { Input } from '@/ui/shared/atoms/input/input'
import * as S from './styled'
import { useState } from 'react'
import { Button } from '@/ui/shared/atoms/button'

const NoPrincipleApplied = () => {
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true)

  const cpfIsValid = () => {
    if (cpf.length !== 11) return false
    
    if (/^(\d)\1{10}$/.test(cpf)) return false

    const calculateCheckDigit = (cpf: string, factor: number) => {
      let total = 0
      for (let i = 0; i < factor - 1; i++) {
          total += parseInt(cpf.charAt(i)) * (factor - i)
      }
      const remainder = (total * 10) % 11
      return remainder === 10 ? 0 : remainder
    }

    const digit1 = calculateCheckDigit(cpf, 10)
    const digit2 = calculateCheckDigit(cpf, 11)

    return digit1 === parseInt(cpf.charAt(9)) && digit2 === parseInt(cpf.charAt(10))
  }

  const emailIsValid = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const passwordIsValid = () => {
    if (password.length < 12) return false

    if (password !== confirmPassword) return false

    const hasNumber = /\d/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    return hasNumber && hasUpperCase && hasSpecialCharacters
  }
  
  const phoneIsValid = () => {
    return (phone.length >= 10 && phone.length <= 15) 
  }

  const ageIsValid = () => {
    return (parseInt(age) >= 18)
  }

  const send = () => {
    if (
      !cpfIsValid() ||
      !emailIsValid() ||
      !phoneIsValid() ||
      !ageIsValid() ||
      !passwordIsValid()
    ) return

    // realizar ação do formulário
  }

  return (
    <S.Wrapper>
      <div className='list'>
        <Input 
          value={cpf}
          onChange={(value) => {
            setCpf(value.replace(/\D/g, ''))
          }}
          placeholder='Insira seu CPF'
        />
        <Input 
          value={email}
          onChange={(value) => {
            setEmail(value)
          }}
          placeholder='Insira seu Email'
        />
        <Input 
          value={phone}
          onChange={(value) => {
            setPhone(value.replace(/\D/g, ''))
          }}
          placeholder='Insira seu Celular'
        />
        <Input 
          value={age}
          onChange={(value) => {
            setAge(value.replace(/\D/g, ''))
          }}
          placeholder='Insira sua Idade'
        />
        <Input 
          value={password}
          onChange={(value) => {
            setPassword(value)
          }}
          placeholder='Crie sua senha'
          onHide={() => {
            setHidePassword(!hidePassword)
          }}
          hide={hidePassword}
        />
        <Input 
          value={confirmPassword}
          onChange={(value) => {
            setConfirmPassword(value)
          }}
          placeholder='Confirme sua senha'
          onHide={() => {
            setHidePassword(!hidePassword)
          }}
          hide={hidePassword}
        />
      </div>
      <Button 
        onClick={send}
        label='Enviar'
      />
    </S.Wrapper>
  )
}

export default NoPrincipleApplied