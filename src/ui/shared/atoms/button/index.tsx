import * as S from './styled'

interface Props {
  onClick: () => void

  label: string
}

export const Button = ({ label, onClick }: Props) => {
  return (
    <S.Button onClick={onClick}>
      <span>{label}</span>
    </S.Button>
  )
}