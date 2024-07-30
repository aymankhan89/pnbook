import React from "react";
import Navbar from "../Ui/navbar";
import HeroSection from "../Ui/heroSection";
import AllCards from "../Ui/AllCards";
import Services from "../Ui/Services";
import Whysec from "../Ui/Whysec";
import ClientLogos from "../Ui/ClientLogos";
import Beneifit from "../Ui/Beneifit";
import Testimonial from "../Ui/Testimonial";
import Article from "../Ui/Article";
import ContactUs from "../Ui/ContactUs";
import Footer from "../Ui/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Ui/Accordian";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AllCards />
      <Services />
      <Whysec />
      <ClientLogos />
      <Beneifit />
      <Testimonial />
      <Article />
      <ContactUs />
      <Footer />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
