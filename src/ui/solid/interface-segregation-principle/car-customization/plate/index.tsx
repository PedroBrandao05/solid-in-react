import * as S from './styled'

interface Props {
  value: string

  onChange: (value: string) => void
}

export const Plate = ({ onChange, value }: Props) => {
  return (
    <S.Container>
      <h3>Placa</h3>
      <input 
        type="text" 
        value={value} 
        onChange={(evt) => { onChange(evt.target.value) }} 
      />
    </S.Container>
  )
}