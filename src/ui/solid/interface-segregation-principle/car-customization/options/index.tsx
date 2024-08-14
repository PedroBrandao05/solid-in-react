import * as S from './styled'

interface Props {
  options: { label: string, checked: boolean, onClick: () => void }[]
}

export const Options = ({ options }: Props) => {
  console.log(options)

  return (
    <S.Container>
      <h3>Opções</h3>
      <ul>
        {options.map((option, index) =>
          <li key={index}>
            <button className={option.checked ? 'checked' : ''} onClick={option.onClick} />
            <label>{option.label}</label>
          </li>
        )}
      </ul>
    </S.Container>
  )
}
