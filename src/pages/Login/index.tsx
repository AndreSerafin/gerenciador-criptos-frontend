import { EyeClosed, Lock, User } from 'phosphor-react'
import logo from '../../assets/imgs/logo.svg'
import { Input } from '../../components/Input'
import { Button, Form, Header, MainContainer } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { SignUpModal } from './components/SignUpModal'

export function Login() {
  return (
    <>
      <Header>
        <img src={logo} alt="" />
      </Header>

      <MainContainer>
        <div>
          <h1>Seja Bem Vindo!</h1>
          <Form action="">
            <Input
              type="text"
              width="22rem"
              iconStart={<User />}
              placeholder="Digite seu email"
            />
            <Input
              type="password"
              width="22rem"
              iconStart={<Lock />}
              iconEnd={<EyeClosed />}
              placeholder="Digite sua senha"
            />

            <Button variant="signin" type="submit">
              Entrar
            </Button>
          </Form>
          <h5>Ainda não possui uma conta?</h5>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="signup" type="button">
                Cadastrar-se
              </Button>
            </Dialog.Trigger>
            <SignUpModal />
          </Dialog.Root>
        </div>
      </MainContainer>
    </>
  )
}
