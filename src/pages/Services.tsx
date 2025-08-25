import { ServiceCard } from "../components/ServiceCard"
import { ServicesData } from "../data/services"
import styles from './styles/Services.module.css'

console.log(ServicesData);

const Services = () => {
    return(
        <>
        <h2>serviços</h2>
        <div className={styles.ServicesCamp}>
        <ServiceCard services={ServicesData}/>
        </div>
        </>
    )
}
export {Services}