import './Home.css'
import avatar from '../assets/avatar.png'

function Home() {
  return (
    <div className="home-container">
      <div className="home-avatar">
        <img src={avatar} alt="avatar qui ressemble à Touna" />
      </div>
      <div className="home-about">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ratione
        repudiandae voluptas ducimus neque enim. Ex, quod rerum culpa blanditiis
        accusamus maiores quidem odio recusandae sed minima porro aut vitae
        placeat laborum corporis provident fugiat animi nisi id. Ex minus
        possimus nemo, adipisci sed obcaecati eligendi assumenda exercitationem
        eos maxime!
      </div>
    </div>
  )
}

export default Home
