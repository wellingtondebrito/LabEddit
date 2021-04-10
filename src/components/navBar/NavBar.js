import React,{useContext} from "react"
import {NavBarStyle} from './StylesNav'

import { useHistory } from 'react-router-dom'
import LoggedContext from "../../context/LoggedContext"

const NavBar = () => {

    const history = useHistory()
    const loggedContext = useContext(LoggedContext)


    const handleLoginOrLogoutClick = () => {

      const token = localStorage.getItem("token")

      if (token) {
        localStorage.removeItem("token")
        loggedContext.setLogged(false)
      }

      history.push("/login")
    }


    return(

        <NavBarStyle>
            <h1>LabEddit</h1>
           
        </NavBarStyle>
    )
}

export default NavBar