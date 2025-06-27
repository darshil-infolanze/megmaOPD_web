import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

import AboutUs from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import TestimonialSlider from "./components/Hero/Testimonials";
import PartnerSlider from "./components/Services/PartnerSlider";
import CareBeyondCoverage from "./components/Banner/CareBeyond";

import MagmaPremiumCare from "./components/primium/magmapremiumcare";
import MagmaHealthShield from "./components/Subscribe/MagmaHealthShield";
import SelfInformations from "./components/Information/SelfInformations";


import Members1 from "./components/Information/Members1";
import Members2 from "./components/Information/Members2";
import Members3 from "./components/Information/Members3";
import Payments from "./components/Information/Payments";
import Submit from "./components/Information/Submit";
import Privacy from "./components/Policy/Privacy";
import Terms from "./components/Policy/Terms";
import Refund from "./components/Policy/Refund";
import Eshipping from "./components/Policy/Eshipping";



const Home = () => (
  <main className="flex flex-col">
    <Hero />
    <PartnerSlider />
    <CareBeyondCoverage />
    <Services />
    <Banner />
    <TestimonialSlider />
    <Banner2 />
  </main>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white text-dark">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<OurTeam />} />

        <Route path="/MagmaPremiumCare" element={<MagmaPremiumCare/>}/>
          
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/MagmaHealthShield" element={<MagmaHealthShield />} />

          <Route path="/selfinformation" element={<SelfInformations />} />
          <Route path="/member1" element={<Members1 />} />
          <Route path="/member2" element={<Members2 />} />
          <Route path="/member3" element={<Members3/>}/>
          
          <Route path="/payment" element={<Payments />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/term" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/eshipping" element={<Eshipping />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
