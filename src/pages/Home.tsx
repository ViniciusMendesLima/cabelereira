import "./styles/home.css"
import photo from"../assets/foto.png"
const Home = () => {
    return (
        <>
        <div className="home-container">
            <img src={photo} alt="Foto Principal" />
        </div>
        </>
    )
}

export {Home}