import { useState } from 'react'
import { InputProps } from '..'
import { Input } from '@/ui/shared/atoms/input/input'

const PasswordInputs = ({ setIsValid }: InputProps) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true)

  const passwordIsValid = (password: string, confirmPassword: string) => {
    if (password.length < 12) return false

    if (password !== confirmPassword) return false

    const hasNumber = /\d/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    return hasNumber && hasUpperCase && hasSpecialCharacters
  }

  return (
    <>
      <Input 
        value={password}
        onChange={(value) => {
          setPassword(value)

          setIsValid(passwordIsValid(value, confirmPassword))
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

          setIsValid(passwordIsValid(password, value))
        }}
        placeholder='Confirme sua senha'
        onHide={() => {
          setHidePassword(!hidePassword)
        }}
        hide={hidePassword}
      />
    </>
  )
}

export default PasswordInputs