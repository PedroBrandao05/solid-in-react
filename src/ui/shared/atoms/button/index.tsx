import { CSSProperties } from 'react'
import * as S from './styled'

interface Props {
  onClick: () => void

  label: string

  style?: CSSProperties
}

export const Button = ({ label, onClick, style }: Props) => {
  return (
    <S.Button style={style} onClick={onClick}>
      <span>{label}</span>
    </S.Button>
  )
}