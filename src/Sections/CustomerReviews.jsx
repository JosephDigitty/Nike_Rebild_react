import { reviews } from "../Constant";
import ReviewCard from "../Features/ReviexCard";

const CustomerReviews = () => {
    return ( 
        <section className="max-container" >
            <h3 className="font-palanquin text-center text-4xl font-bold">
                What Our
                <span className="text-coral-red "> Customer </span>
                say?
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">
                Hear genuine stories from our satisfied customers
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-24">
                {reviews.map((review) =>(
                    <ReviewCard key={review.customerName} 
                    imgURL={review.imgURL} 
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                     />
                ))}

            </div>
        </section>
     );
}
 
export default CustomerReviews;