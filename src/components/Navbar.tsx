import "./styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-name">
        <h1>Elisangela Mandes</h1>
      </div>
      <nav className="navbar">
        <input id="menu-humburguer" type="checkbox" />
      
        <label htmlFor="menu-humburguer">
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>
        <ul className="links">
          <li>
            <a href="#services">serviços</a>
          </li>
          <li>
            <a href="#about">Sobre Mim</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
