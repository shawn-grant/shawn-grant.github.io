import HeroSection from '../../components/Hero/HeroSection'
import jmFlag from '../../assets/jm_flag.png';
import './home.scss';
import FloatingShapesBG from '../../components/FloatingShapesBG/FloatingShapesBG';
import ProjectSection from '../../components/Projects/ProjectSection';
import ExperienceSection from '../../components/Experience/ExperienceSection';
import ActivitiesSection from '../../components/Activities/ActivitiesSection';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {

  return (
    <div className="HomePage">
      <FloatingShapesBG />
      <div className="bg first"></div>
      <div className="bg second"></div>
      <div className="bg third"></div>

      <HeroSection />

      <br />
      <div className="about">
        I'm a software engineer based in Jamaica <img src={jmFlag} alt="" />, with a passion for art and design. <br />
        I love learning new things and using technology to build solutions to the problems around me. <br />
        I'm a huge fan of Generative AI and its potential to transform industries.
      </div>
      <br />

      <ProjectSection />
      <ExperienceSection />
      <ActivitiesSection />
      <Footer />
    </div>
  )
}
