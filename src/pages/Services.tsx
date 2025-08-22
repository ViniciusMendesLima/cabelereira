import { ServiceCard } from "../components/ServiceCard"
import { ServicesData } from "../data/services"
import "./styles/services.css"

console.log(ServicesData);

const Services = () => {
    return(
        <>
        <h2>serviços</h2>
        <div className="services-camp">
        <ServiceCard services={ServicesData}/>
        </div>
        </>
    )
}
export {Services}