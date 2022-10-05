import { useState } from "react"
import { Link } from "react-scroll"

export const MenuToggle = () => {

  const [toggle, setToggle] = useState("")

  return (
    <>
      <div className={["menuBtn", toggle].join(" ")} onClick={() => { toggle ? setToggle("") : setToggle("active") }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section className={["menu-mobile", toggle].join(" ")}>
        <nav className="nav-mobile">
          <ul className="nav_list">
            <li className="nav_item">
              <a 
                href="https://dynamox.net/dynapredict/" 
                target="_blank" 
                rel="noreferrer"
                className="nav_link">
              DynaPredict</a>
            </li>
            <li className="nav_item">
              <Link
                className="nav_link"
                onClick={() => {setToggle("")}}
                activeClass="active"
                to="sensors"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                Sensores
              </Link>
            </li>
            <li className="nav_item">
              <Link
                className="nav_link"
                onClick={() => {setToggle("")}}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}