import { ServiceCard } from "../components/ServiceCard"
import { Slider } from "../components/Slider"
import { ServicesData } from "../data/services"
import styles from './styles/Services.module.css'

const Services = () => {
    return(
        <>
        <h2>serviços</h2>
        <div className={styles.ServicesCamp}>
        <ServiceCard services={ServicesData}/>
        </div>
        <Slider/>
        </>
    )
}
export {Services}