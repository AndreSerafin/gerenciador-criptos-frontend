import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, Portal, SignupForm } from './styles'
import { Input } from '../../../../components/Input'
import { Envelope, Eye, EyeClosed, Lock, User } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { useContext, useState } from 'react'
import { UsersContext } from '../../../../contexts/UsersContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface SignupModalProps {
  openModal: () => void
}

const newUserFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

export type NewUserFormInputs = z.infer<typeof newUserFormSchema>

export function SignUpModal({ openModal }: SignupModalProps) {
  const { createNewUser } = useContext(UsersContext)
  const { handleSubmit, register, reset } = useForm<NewUserFormInputs>({
    resolver: zodResolver(newUserFormSchema),
  })
  const [passwordVisibility, setPasswordVisibility] = useState('password')

  async function handleCreateNewUser(data: NewUserFormInputs) {
    await createNewUser(data)
    openModal()
    reset()
  }

  return (
    <Portal>
      <Overlay onClick={openModal} />
      <Content>
        <Dialog.Title>
          Ainda não possui uma conta? Cadastre-se Agora.
        </Dialog.Title>
        <SignupForm onSubmit={handleSubmit(handleCreateNewUser)}>
          <Input
            placeholder="Nome"
            type="text"
            iconStart={<User size={23} />}
            required
            register={{ ...register('name') }}
            autoComplete="off"
          />
          <Input
            placeholder="Email"
            type="text"
            iconStart={<Envelope size={23} />}
            required
            register={{ ...register('email') }}
            autoComplete="off"
          />
          <Input
            placeholder="Senha"
            type={passwordVisibility.toString()}
            iconStart={<Lock size={23} />}
            autoComplete="off"
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
            required
            register={{
              ...register('password'),
            }}
          />
          <div>
            <Button width="12rem" variant="confirm">
              Cadastrar
            </Button>
            <Close onClick={openModal}> Voltar</Close>
          </div>
        </SignupForm>
      </Content>
    </Portal>
  )
}
