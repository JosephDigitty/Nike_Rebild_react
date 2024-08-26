import { arrowRight } from "../assets/icons";
import Button from "../Features/Button";

const Hero = () => {
    return ( 
        <section
        id="home"
        className="w-ful  p-2 flex xl:flex-row flex-col justify-center min-h-sreen gap-10 max-conatainer">
            <div className="relative xl:2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
            <p>
                Our Summer Collection 
            </p>
            <h1>
                The New Arrival <br />
                <span>Nike</span> Shoes
            </h1>
            <p>
                Discover stylish Nike arrivals, 
                qulaity comfort, and innovation 
                for your active life
            </p>
            <Button label="Shop Now"
            iconUrl={arrowRight}
            />
            </div>
        </section>
     );
}

export default Hero;