import HeroSection from '../../components/Hero/HeroSection'
import jmFlag from '../../assets/jm_flag.png';
import './home.scss';
import FloatingShapesBG from '../../components/FloatingShapesBG/FloatingShapesBG';
import ProjectSection from '../../components/Projects/ProjectSection';

export default function HomePage() {

  return (
    <div className="HomePage">
      <FloatingShapesBG />
      <div className="bg"></div>
      <HeroSection />

      <br />
      <div className="about">
        I'm a software developer & CS student based in Jamaica <img src={jmFlag} alt="" />, with a passion for art and UI design. <br />
        I enjoy creating and learning new things.
      </div>
      <br />

      <ProjectSection />
    </div>
  )
}
