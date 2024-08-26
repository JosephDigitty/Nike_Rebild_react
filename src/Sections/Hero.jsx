import { arrowRight } from "../assets/icons";
import Button from "../Features/Button";
import { shoes, statistics } from "../Constant";
import { bigShoe1 } from "../assets/images";
import shoeCard from "../Features/shoeCard";
const Hero = () => {
    return ( 
        <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-conatainer">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
            <p className="text-xl font-montserrat text-coral-red ">
                Our Summer Collection 
            </p>
            <h1 className="mt-10 font-palanquin 
                text-8xl  max-sm:text-[72px] 
                max-sm:leading-[82px]
                 font-bold"> 
                <span className="xl:bg-white xl:whitespace-nowrap 
                relative z-10 pr-10"> The New Arrival</span>
                 <br />
                <span className="text-coral-red inline-block mt-3 ">Nike</span> Shoes
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
                Discover stylish Nike arrivals, 
                qulaity comfort, and innovation 
                for your active life
            </p>
            <Button label="Shop Now"
            iconUrl={arrowRight}
            />
            <div className="flex justify-starts 
            items-start flex-wrap 
            w-full mt-20 gap-16">
                {statistics.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center text-center">
                        <p className="text-4xl font-palanquin bold">{stat.value}</p>
                        <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                    </div>
                ))}
            </div>
            </div>

            <div className="relative flex-1 flex justify-center max-xl:py-40 bg-primary bg-hero bg-cover bg-center xl:min-h-screen items-center">
                <img src={bigShoe1} alt="shoe collection"
                width={610}
                height={500}
                className="object-contain relative z-10" />
            </div>
            <div>
                {shoes.map((shoe) => {
                    <div key={shoe}>
                        <shoeCard
                        imgUrl={shoe}
                        changeBigShoeImage = {() => {}} 
                        bigShoeImage =""
                        />
                    </div>
                })}
            </div>
        </section>
     );
}

export default Hero;