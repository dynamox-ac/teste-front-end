import { useState } from "react"
import { useDispatch } from "react-redux"
import profileImg from "../assets/img/profile.jpg"
import { logout } from "../state/userSlice"
import { useNavigate } from "react-router-dom"

const MenuDropdown = () => {
    const [toggle, setToggle] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()

    return (
        <>
            <div className="actionDrop">
                <div className="profileDrop" onClick={() => { toggle ? setToggle("") : setToggle("active") }}>
                    <img src={profileImg} alt="profile" />
                </div>
                <div className={["menuDrop", toggle].join(" ")}>
                    <ul>
                        <li><span onClick={() => {
                            dispatch(logout())
                            localStorage.clear("auth")
                            navigate("/")
                        }}>Logout</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MenuDropdown