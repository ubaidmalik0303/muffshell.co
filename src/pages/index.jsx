import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'
import { Helmet } from "react-helmet"
import Header from "../component/Header";
import BrandSection from "../component/BrandSection";
import ImageCarousel from "../component/ImageCarousel";
import PillOrganizer from "../component/PillOrganizer";
import PillCrusher from "../component/PillCrusher";
import Features from "../component/Features";
import VideoSection from "../component/VideoSection";
import Footer from "../component/Footer";


const Home = () => {

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title="Weekly Pill Organizer & Pill Crusher - MuffShell"
        meta={[
          {
            name: "discription",
            content: "Buy No 1 Pill Organizer by muffshell for daily use. our pill organizer comes with pill crusher to make pills easy to swallow."
          },
        ]}
      />
      <Header />
      <BrandSection />
      <ImageCarousel />
      <PillOrganizer />
      <PillCrusher />
      <Features />
      <VideoSection />
      <Footer />
    </>
  )
}

export default Home;
