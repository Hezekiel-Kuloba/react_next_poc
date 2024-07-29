import { Footer } from "../components/footer"
import { NavBar } from "../components/navbar"
import { UserUpdate } from "../services/authentication/update_user"
import { UserUpdateTwo } from "../services/authentication/update_user"

export const Update_user = () => {
    return (
      <div>
        <NavBar/>
        {/* <UserUpdate/> */}
        <UserUpdateTwo/>
        <Footer/>
      </div>
    )
  }
  