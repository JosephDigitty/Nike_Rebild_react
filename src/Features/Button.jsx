const Button = ({label, iconUrl, backgroundColor, textColor, borderColor}) => {
    return ( 
        <button className={`flex justify-center items-center 
        gap-2 px-7 py-4 border font-montserrat 
        text-lg leading-none rounded-full w-full
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :
        "border-coral-red text-white bg-coral-red "
         }`}>
        {label}

        {iconUrl && <img src={iconUrl} alt="arrowIcon" 
        className="ml-2 rounded-full w-5 h-5 "
        />}
        </button>
     );
}
 
export default Button;