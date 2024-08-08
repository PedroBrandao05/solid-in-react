import { Dispatch, RefObject, SetStateAction, useRef, useState } from 'react'
import * as S from './styled'
import CpfInput from './cpf-input'
import EmailInput from './email-input'
import PhoneInput from './phone-input'
import AgeInput from './age-input'
import PasswordInputs from './password-inputs'

import { Button } from '@/ui/shared/atoms/button'

export interface InputRef { isValid: boolean }

export interface InputProps {
  setIsValid: Dispatch<SetStateAction<boolean>>
}

const PrincipleApplied = () => {
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [cpfIsValid, setCpfIsValid] = useState(false)
  const [phoneIsValid, setPhoneIsValid] = useState(false)
  const [ageIsValid, setAgeIsValid] = useState(false)
  const [passwordIsValid, setPasswordIsValid] = useState(false)

  const send = () => {
    const inputs = [emailIsValid, cpfIsValid, phoneIsValid, ageIsValid, passwordIsValid]

    if (!inputs.every(isValid => isValid)) return

    // executar ação do formulário
  }

  return (
    <S.Wrapper>
      <div className='list'>
        <CpfInput setIsValid={setCpfIsValid} />
        <EmailInput setIsValid={setEmailIsValid} />
        <PhoneInput setIsValid={setPhoneIsValid} />
        <AgeInput setIsValid={setAgeIsValid} />
        <PasswordInputs setIsValid={setPasswordIsValid} />
      </div>

      <Button onClick={send} label='Enviar'/>
    </S.Wrapper>
  )
}

export default PrincipleApplied