import { Footer } from "../components/footer"
import { NavBar } from "../components/navbar"
import { Forgot_password } from "../services/authentication/forgot_password"


export const Reset_password = () => {
  return (
    <div>
      <NavBar/>
        <Forgot_password/>
        <Footer/>
    </div>
  )
}
