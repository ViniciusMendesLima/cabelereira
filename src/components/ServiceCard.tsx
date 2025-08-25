import standardImage from "../assets/services/standard.webp";
import styles from './styles/ServiceCard.module.css'
interface ServiceType {
  name: string;
  description: string;
  imageUrl?: string | null;
}

type ServiceCardProps = {
  services: ServiceType[];
};

const ServiceCard = ({ services }: ServiceCardProps) => {
  return (
    <>
      {services.map((service) => (
        <div className={styles.ServiceCard} key={service.name}>
          <img src={service.imageUrl || standardImage} />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </>
  );
};

export { ServiceCard };
