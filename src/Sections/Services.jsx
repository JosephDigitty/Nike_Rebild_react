import { services } from "../Constant";
import ServiceCard from "../Features/ServiceCard";

const Services = () => {
    return ( 
        <section 
        className="max-conatainer flex justify-center flex-wrap gap-9"
        >
            {services.map((service) =>(
                <ServiceCard key={service.label} {...service}/>
            ))}
        </section>
     );
}
 
export default Services;