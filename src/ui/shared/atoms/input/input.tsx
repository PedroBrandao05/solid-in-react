import { EyeClosedIcon } from '../../icons/eye-closed'
import { EyeOpenedIcon } from '../../icons/eye-opened'
import * as S from './styled'

interface Props {
  value: string

  onChange: (value: string) => void

  placeholder?: string

  hide?: boolean

  onHide?: () => void

  icon?: JSX.Element
}

export const Input = ({ onChange, value, hide, onHide, placeholder, icon }: Props) => {

  return (
    <S.Wrapper>
      <input 
        type={hide ? 'password' : 'text'}
        value={value}
        placeholder={placeholder}
        onChange={(evt) => { onChange(evt.target.value) }}
      />
      {onHide && 
        <>
          {hide && <EyeClosedIcon onClick={onHide} />}
          {!hide && <EyeOpenedIcon onClick={onHide} />}
        </>
      }
      {!!icon && icon}
    </S.Wrapper>
  )
}
