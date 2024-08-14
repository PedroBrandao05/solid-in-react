import * as S from './styled'

interface Props {
  value: string

  onChange: (value: string) => void
}

export const ColorPicker = ({ onChange, value }: Props) => {
  return (
    <S.Container>
      <input 
        type="color"
        value={value}
        onChange={(evt) => { onChange(evt.target.value) }}
      />
    </S.Container>
  )
}