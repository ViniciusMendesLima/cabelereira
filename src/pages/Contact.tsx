import styles from './styles/Contact.module.css'
const Contact = () => {
  return (
    <>
      <h2>Contato</h2>
      <div className={styles.ContactInformation}>
        <div className={styles.ContactItem}>
          <i className="fa-solid fa-location-dot"></i>
          <p>Rua Exemplo, 123, Cidade,UF</p>
        </div>
        <div className={styles.ContactItem}>
          <i className="fa-solid fa-envelope"></i>
          <p>Contato@exemplo.com</p>
        </div>
        <div className={styles.ContactItem}>
          <i className="fa-solid fa-phone"></i>
          <p>(11)123-5678</p>
        </div>
      </div>
    </>
  );
};

export { Contact };
