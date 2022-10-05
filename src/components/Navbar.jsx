import { Link } from "react-scroll"
import logo from "../assets/images/logo-dynamox.png"
import { MenuToggle } from "./MenuToggle"

const Navbar = () => {
    return (
        <>
            <header className="header">
                <div className="header-content container">
                    <a href=" https://dynamox.net/" target="_blank" rel="noreferrer">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                    <nav className="header-nav">
                        <ul className="nav-list">
                            <li><a href="https://dynamox.net/dynapredict/" target="_blank" rel="noreferrer">DynaPredict</a></li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="sensors"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                    Sensores
                                </Link>
                            </li>
                            <li>
                                <Link
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
                    <MenuToggle/>
                </div>
            </header>
            <div className="space-header"></div>
        </>
    )
}

export default Navbar