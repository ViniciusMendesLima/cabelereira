import styles from './styles/Navbar.module.css'
const Navbar = () => {
  return (
    <>
      <div className={styles.NavbarName}>
        <h1>Elisangela Mandes</h1>
      </div>
      <nav className={styles.Navbar}>
        <input id="MenuHumburguer" type="checkbox" />
      
        <label htmlFor="MenuHumburguer">
          <div className={styles.Menu}>
            <span className={styles.Hamburguer}></span>
          </div>
        </label>
        <ul className={styles.Links}>
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
