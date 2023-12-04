import './Home.scss'
import { Parallax } from 'react-scroll-parallax'

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <Parallax speed={10} translateY={['100px', '-100px']}>
          <div className="home-left-infos">
            <a
              href="../assets/cv-tuna-saygili.pdf"
              className="cv"
              target="_blank"
              title="Encore un peu plus de moi."
            >
              <div className="cv__link">CV</div>
            </a>
            <div className="profil"></div>
          </div>
          {/* <img src={avatar} alt="avatar qui ressemble à Touna" /> */}
        </Parallax>
      </div>
      <div className="home-right">
        <Parallax speed={10} translateY={['-100px', '100px']}>
          <span className="about-absolute">about</span>
          <h1 className="title-perso">Salut! C'est Tuna !</h1>
          <div className="desc-perso">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            ratione repudiandae voluptas ducimus neque enim. Ex, quod rerum
            culpa blanditiis accusamus maiores quidem odio recusandae sed minima
            porro aut vitae placeat laborum corporis provident fugiat animi nisi
            id. Ex minus possimus nemo, adipisci sed obcaecati eligendi
            assumenda exercitationem eos maxime!
          </div>
          <div className="social-perso"></div>
          <div className="contact-perso">
            <h2>Contact Moi !</h2>
            <p className="mail">Email: tuna.saygili@live.fr</p>
          </div>
        </Parallax>
      </div>
    </div>
  )
}

export default Home
