import { Eye, EyeClosed, Lock, User } from 'phosphor-react'
import logo from '../../assets/imgs/logo.svg'
import { Input } from '../../components/Input'
import { Form, Header, MainContainer, Trigger } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { SignUpModal } from './components/SignUpModal'
import { Button } from '../../components/Button'
import { useState } from 'react'

export function Login() {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState('password')

  function handleOpenModal() {
    if (openLoginModal === true) {
      setOpenLoginModal(false)
    } else {
      setOpenLoginModal(true)
    }
  }
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
              iconStart={<User size={23} />}
              placeholder="Digite seu email"
              required
            />
            <Input
              type={passwordVisibility}
              width="22rem"
              iconStart={<Lock size={23} />}
              iconEnd={
                <button
                  onClick={() => {
                    if (passwordVisibility === 'password') {
                      setPasswordVisibility('text')
                    } else {
                      setPasswordVisibility('password')
                    }
                  }}
                  type="button"
                >
                  {passwordVisibility === 'text' ? (
                    <EyeClosed style={{ cursor: 'pointer' }} size={23} />
                  ) : (
                    <Eye style={{ cursor: 'pointer' }} size={23} />
                  )}
                </button>
              }
              placeholder="Digite sua senha"
              required
            />

            <Button variant="confirm" type="submit">
              Entrar
            </Button>
          </Form>
          <h5>Ainda não possui uma conta?</h5>
          <Dialog.Root open={openLoginModal}>
            <Trigger onClick={handleOpenModal}>Cadastrar-se</Trigger>
            <SignUpModal openModal={handleOpenModal} />
          </Dialog.Root>
        </div>
      </MainContainer>
    </>
  )
}
