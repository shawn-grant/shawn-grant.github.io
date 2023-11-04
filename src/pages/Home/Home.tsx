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
        I'm a software developer & Computer Science student based in Jamaica <img src={jmFlag} alt="" />, with a passion for art and design. <br />
        I enjoy creating and learning new things.
      </div>
      <br />

      <ProjectSection />
      <ExperienceSection />
      <ActivitiesSection />
      <Footer />
    </div>
  )
}
