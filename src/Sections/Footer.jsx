import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constant";

const Footer = () => {
    return ( 
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
                <div className="flex flex-col items-start">
                    <a href="/">
                    <img src={footerLogo} alt="" 
                    width={150}
                    height={46}/>
                    </a>
                    <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                        get shoes ready for the new term at your nearest nike store. fine your perfect size in store. get rewards
                    </p>
                        <div className="flex items-center gap-5 mt-8">
                            {socialMedia.map((icon) => (
                                <div className="flex justify-center items-cemter w-12 h-12 bg-white rounded-full">
                                    <img src={icon.src} alt={icon.alt}
                                    width={24}
                                    height={24}
                                    />
                                </div>
                            ))}

                        </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                                {section.title}
                            </h4>
                            <ul>
                            {section.links.map((link) =>(
                                <li key={link.name}
                                className="text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray mt-3" >
                                    <a href={link.href} className="">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                        
                    ))}

                </div>
            </div>

            <div className="flex justify-between py-14 flex-col sm:flex-row gap-4">
                <p className=" text-base leading-7 font-montserrat  text-white-400 sm:max-w-sm">
                    &copy; {new Date().getFullYear()}  Nike. All rights reserved.
                </p>
                <p>
                    <a href="/terms-and-conditions" className="text-white-400 font-montserrat text-base leading-7 hover:text-slate-gray">
                        Terms & Conditions
                    </a>
                    |
                   
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;