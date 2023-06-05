import { Eye, EyeClosed, Lock, User } from 'phosphor-react'
import logo from '../../assets/imgs/logo.svg'
import { Input } from '../../components/Input'
import { Form, Header, MainContainer, Trigger } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { SignUpModal } from './components/SignUpModal'
import { Button } from '../../components/Button'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loading } from '../../components/Loading'

const authUserFormSchema = z.object({
  email: z.string().nonempty('* Campo obrigatório').email('* Email Inválido'),
  password: z
    .string()
    .nonempty('* Campo obrigatório')
    .min(6, '* A senha deve ter pelo menos 6 caracteres'),
})

type AuthUserFormInputs = z.infer<typeof authUserFormSchema>

export function Login() {
  const { signin, loading } = useContext(AuthContext)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthUserFormInputs>({
    resolver: zodResolver(authUserFormSchema),
  })
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState('password')

  function handleOpenModal() {
    openLoginModal === true ? setOpenLoginModal(false) : setOpenLoginModal(true)
  }
  function handleAuthUser(data: AuthUserFormInputs) {
    signin(data)
  }
  return (
    <>
      {loading && <Loading />}
      <Header>
        <img src={logo} alt="" />
      </Header>

      <MainContainer>
        <div>
          <h1>Seja Bem Vindo!</h1>
          <Form onSubmit={handleSubmit(handleAuthUser)}>
            <Input
              type="text"
              width="22rem"
              iconStart={<User size={23} />}
              placeholder="Digite seu email"
              register={{ ...register('email') }}
              required
            />
            {errors?.email && <p>{errors.email.message}</p>}
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
              required
              placeholder="Digite sua senha"
              register={{ ...register('password') }}
            />
            {errors?.password && <p>{errors.password.message}</p>}

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
