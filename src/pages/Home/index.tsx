import { Header } from './styles'
import logo from '../../assets/imgs/logo.svg'
import { SignOut, UserCircle } from 'phosphor-react'
export function Home() {
  return (
    <>
      <Header>
        <div>
          <img src={logo} alt="" />
          <div>
            <span>
              <UserCircle size={30} />
              Perfil
            </span>
            <span>
              <SignOut size={30} weight="bold" color="#eb414b" />
            </span>
          </div>
        </div>
      </Header>
    </>
  )
}
