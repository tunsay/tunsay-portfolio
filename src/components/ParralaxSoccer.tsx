import { Parallax } from 'react-scroll-parallax'
import goal from '../assets/bartez.png'
import ball from '../assets/R.png'
import cage from '../assets/cage.png'
import './ParralaxSoccer.scss'

const ParralaxSoccer = () => {
  return (
    <div className="soccer-parralax">
      <img className="cage" src={cage} alt="" />
      <Parallax
        translateX={['-2000px', '-120px', 'easeOutQuint']}
        translateY={['0px', '0px', 'easeOutQuint']}
      >
        <span>
          <img className="goal" src={goal} alt="" />
        </span>
      </Parallax>
      <Parallax
        translateX={['-1500px', '0px', 'easeOutQuint']}
        translateY={['0px', '0px', 'easeInQuint']}
        rotate={[0, 360]}
        easing={'ease'}
        scale={[1, 0.76]}
      >
        <span>
          <img className="ball" src={ball} alt="" />
        </span>
      </Parallax>
    </div>
  )
}

export default ParralaxSoccer
