import { useEffect, useRef, useState } from 'react'
import './SoundRandomizerDemo.scss'
import screenshot from '../assets/sound-randomizer-screenshot.png'

function randomCount() {
  return Math.floor(Math.random() * 6) + 5
}

function SoundRandomizerDemo() {
  const [count, setCount] = useState(randomCount)
  const [playing, setPlaying] = useState(false)
  const [shaking, setShaking] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const phaseRef = useRef<'counting' | 'playing'>('counting')

  useEffect(() => {
    const audio = new Audio(process.env.PUBLIC_URL + '/mon-son.mp3')
    audio.volume = 0
    audio.loop = true
    audioRef.current = audio
    return () => { audio.pause() }
  }, [])

  function fadeTo(target: number, ms: number) {
    const audio = audioRef.current
    if (!audio) return
    const steps = 20
    const start = audio.volume
    const diff = target - start
    let step = 0
    const t = setInterval(() => {
      step++
      audio.volume = Math.min(1, Math.max(0, start + diff * (step / steps)))
      if (step >= steps) clearInterval(t)
    }, ms / steps)
  }

  useEffect(() => {
    const tick = setInterval(() => {
      if (phaseRef.current !== 'counting') return
      setCount(prev => {
        if (prev > 1) return prev - 1

        phaseRef.current = 'playing'
        setPlaying(true)
        setShaking(true)

        audioRef.current?.play().catch(() => {})
        fadeTo(1, 1000)

        setTimeout(() => setShaking(false), 600)

        setTimeout(() => {
          fadeTo(0, 1000)
          setTimeout(() => {
            const audio = audioRef.current
            if (audio) { audio.pause(); audio.currentTime = 0 }
            setPlaying(false)
            phaseRef.current = 'counting'
            setCount(randomCount())
          }, 1000)
        }, 3500)

        return 0
      })
    }, 1000)

    return () => clearInterval(tick)
  }, [])

  return (
    <div className="sr-demo">
      <div className="sr-demo__screenshot">
        <img src={screenshot} alt="Sound Randomizer aperçu" />
      </div>

      <div className="sr-demo__player">
        <div className={`sr-demo__speaker ${shaking ? 'is-shaking' : ''}`}>
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 30H24L42 18V62L24 50H12V30Z"
              fill="white"
              fillOpacity="0.9"
            />
            <g className={`sr-demo__waves ${playing ? 'is-visible' : ''}`}>
              <path d="M50 28C54 32 54 48 50 52" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path d="M57 22C63 28 63 52 57 58" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
              <path d="M64 16C72 24 72 56 64 64" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.45"/>
            </g>
          </svg>
        </div>

        <div className="sr-demo__info">
          {playing ? (
            <span className="sr-demo__playing">♪ en lecture</span>
          ) : (
            <>
              <span className="sr-demo__label">prochain son dans</span>
              <span className="sr-demo__count">{count}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SoundRandomizerDemo
