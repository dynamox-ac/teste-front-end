import { useState } from "react"
import { Link } from "react-router-dom"
import { FaListUl, FaPlus, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";


const NavButton = () => {
  const [toggle, setToggle] = useState("")

  const AlternToggle = () => {
    toggle ? setToggle("") : setToggle("active")
  }

  return (
    <>
      <div className="navigation">
        <div className={["menuToggle", toggle].join(" ")} onClick={AlternToggle}>

        </div>
        <div className={["menu", toggle].join(" ")}>
          <ul>
            <li>
              <Link to="/" onClick={AlternToggle}>
                <FaListUl />
              </Link>
            </li>
            <li>
              <Link to="/new" onClick={AlternToggle}>
                <FaPlus />
              </Link>
            </li>
            <li>
              <Link to="/edit" onClick={AlternToggle}>
                <FaPencilAlt />
              </Link>
            </li>
            <li>
              <Link to="/delete" onClick={AlternToggle}>
                <FaRegTrashAlt />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavButton