import MenuDropdown from "./MenuDropdown"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-content container">
                    <h1>CRUD Sys</h1>
                    <MenuDropdown/>
                </div>
            </header>
        </>
    )
}

export default Header