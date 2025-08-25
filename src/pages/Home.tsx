import styles from './styles/Home.module.css'
import photo from"../assets/foto.png"
const Home = () => {
    return (
        <>
        <div className={styles.HomeContainer}>
            <img src={photo} alt="Foto Principal" />
        </div>
        </>
    )
}

export {Home}