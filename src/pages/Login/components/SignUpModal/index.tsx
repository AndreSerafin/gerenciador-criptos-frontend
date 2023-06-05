import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, Portal, SignupForm } from './styles'
import { Input } from '../../../../components/Input'
import { Envelope, Eye, EyeClosed, Lock, User } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { useContext, useState } from 'react'
import { UsersContext } from '../../../../contexts/Users/UsersContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthContext } from '../../../../contexts/Auth/AuthContext'
import { Loading } from '../../../../components/Loading'

interface SignupModalProps {
  openModal: () => void
}

const newUserFormSchema = z.object({
  name: z.string().nonempty('* Campo obrigatório'),
  email: z.string().nonempty('* Campo obrigatório').email('* Email Inválido'),
  password: z
    .string()
    .nonempty('* Campo obrigatório')
    .min(6, '* A senha deve ter pelo menos 6 caracteres'),
})

type NewUserFormInputs = z.infer<typeof newUserFormSchema>

export function SignUpModal({ openModal }: SignupModalProps) {
  const { loading } = useContext(AuthContext)
  const { createNewUser } = useContext(UsersContext)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<NewUserFormInputs>({
    resolver: zodResolver(newUserFormSchema),
  })
  const [passwordVisibility, setPasswordVisibility] = useState('password')

  function handleCreateNewUser(data: NewUserFormInputs) {
    createNewUser(data)
    openModal()
    reset()
  }

  return (
    <Portal>
      <Overlay onClick={openModal} />
      {loading && <Loading />}
      <Content>
        <Dialog.Title>
          Ainda não possui uma conta? Cadastre-se Agora.
        </Dialog.Title>
        <SignupForm onSubmit={handleSubmit(handleCreateNewUser)}>
          <Input
            placeholder="Nome"
            type="text"
            iconStart={<User size={23} />}
            register={{ ...register('name') }}
            autoComplete="off"
            required
          />
          {errors?.name && <p>{errors.name.message}</p>}
          <Input
            placeholder="Email"
            type="text"
            iconStart={<Envelope size={23} />}
            register={{ ...register('email') }}
            autoComplete="off"
            required
          />

          {errors?.email && <p>{errors?.email.message}</p>}
          <Input
            placeholder="Senha"
            type={passwordVisibility.toString()}
            iconStart={<Lock size={23} />}
            autoComplete="off"
            required
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
            register={{
              ...register('password'),
            }}
          />
          {errors?.password && <p>{errors.password.message}</p>}
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
