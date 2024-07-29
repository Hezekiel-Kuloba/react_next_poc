import { Footer } from '../components/footer'
import { NavBar } from '../components/navbar'
import { Login } from '../services/authentication/login'

export const SignIn = () => {
  return (
    <div>
      <NavBar/>
        <Login />
        <Footer/>
    </div>
  )
}
