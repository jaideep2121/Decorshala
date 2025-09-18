import Image from "next/image";
import Navbar from "./Component/Navbar";
import ServicesSection from "./Component/Service";
import ReviewSection from "./Component/ReviewSection";
import ContactForm from "./Component/Contact";
import Footer from "./Component/Footer";
import Practise from "./Component/Practise";

export default function Home() {
  return (
   <div>
    <Navbar></Navbar>
    <ServicesSection></ServicesSection>
    <ReviewSection></ReviewSection>
    <ContactForm></ContactForm>
   <Footer></Footer>
   
   </div>
  );
}
