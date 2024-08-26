import { Hero,
  Footer,
  CustomerReviews,
  PopularProduct,
  SpecialOffer,
  SuperQuality,
  Subscribe, } from "./Sections/index"
import Nav from "./Features/Nav";

const App = () => {
  return ( 
  <main className="relative ">
    <Nav/>
    <section className="xl:pading-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding-x py-10">
      <SuperQuality/>
    </section>
    <section className="padding">
      <SpecialOffer/> 
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 p-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x bg-black padding-x padding-t pb-8">
      <SpecialOffer/> 
    </section>
    <section className="padding-x bg-black padding-x padding-t pb-8">
      <Footer/> 
    </section>

  </main> 
  )
}
 
export default App;