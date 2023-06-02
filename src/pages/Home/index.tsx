import { User } from 'phosphor-react'
import { Input } from '../../components/Input'

export function Home() {
  return (
    <>
      <Input
        placeholder="Digite sua senha"
        width="22rem"
        iconStart={<User />}
        type="text"
      ></Input>
    </>
  )
}
