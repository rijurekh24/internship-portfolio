import data from "../Data.json";
import About from "../components/About/About";
import Iconbox from "../components/Iconbox/Iconbox";
import Skill from "../components/Skill/Skill";
import Resume from "../components/Resume/ResumeSection";
import BlogSection from "../components/Blog/BlogSection";
import ReviewSection from "../components/Review/ReviewSection";
import Contact from "../components/Contact/Contact";
import PortfolioSection from "../components/Protfolio/PortfolioSection";
import Hero from "../components/Hero/Hero";
import useUserData from "../hooks/useUserData";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

const Home = () => {
  const {
    heroData,
    aboutData,
    skillData,
    portfolioData,
    blogData,
    resumeData,
    reviewData,
    contactData,
    socialData,
  } = data;

  const ctx = useContext(userContext);
  const servicesData = ctx.userData.services;

  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero
        data={heroData.homeOneHero}
        info={ctx.userData.about}
        socialData={ctx.userData.social_handles}
      />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={{ services: servicesData }} data-aos="fade-right" />
      <Skill
        data={skillData}
        skills={ctx.userData.skills}
        data-aos="fade-right"
      />
      <Resume data={resumeData} timeline={ctx.userData.timeline} />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <ReviewSection
        data={reviewData}
        review={ctx.userData.testimonials}
        data-aos="fade-right"
      />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact
        data={contactData}
        socialData={ctx.userData.social_handles}
        data-aos="fade-right"
      />
    </>
  );
};

export default Home;
