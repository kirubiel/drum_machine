import { useRef, useEffect, useState } from 'react'
import './App.css'
import {DataBank} from './DataBank'

function App() {
  const [displayText, setDisplayText] = useState(null)
  const [svg, setSVG] = useState(null)

  const playAudio = (e, text, svg) => {
    let audio = e.target.firstChild
    audio.load()
    audio.play()
    setDisplayText(text)
    setSVG(svg)
  }

  const focusRef = useRef()
  const padsRef = useRef([])

  useEffect(() => {
    focusRef.current.focus()
    padsRef.current = padsRef.current.slice(0, DataBank.length)
  })

  const playAudioKey = (e) => {
    const indexOfPad = padsRef.current.findIndex(pad => pad.id.toLowerCase() === e.key.toLowerCase())
    if(indexOfPad > -1) {
      let audio = padsRef.current[indexOfPad]
      audio.parentNode.classList.add("change")
      audio.load()
      audio.play()
      setDisplayText(DataBank[indexOfPad].text)
      setSVG(DataBank[indexOfPad].svg)
    }
  }

  const removeStyle = e => {
    const indexOfPad = padsRef.current.findIndex(pad => pad.id.toLowerCase() === e.key.toLowerCase())
    if(indexOfPad > -1) {
      padsRef.current[indexOfPad].parentNode.classList.remove("change")
    }
  }

  return (
    <div id="drum-machine">
      <div className="drum-pads" tabIndex="0"
        autoFocus={true} ref={focusRef}
        onBlur={({ target }) => target.focus()}
        onKeyDown={e => playAudioKey(e)}
        onKeyUp={e => removeStyle(e)}>
        {DataBank.map((pad, i) => <button key={i} id={i} className="drum-pad" onClick={e => playAudio(e, pad.text, pad.svg)}>
          <audio id={pad.name.toUpperCase()} ref={el => padsRef.current[i] = el} className="clip" src={pad.src} preload="none" />
          {pad.name.toUpperCase()}
        </button>)}
      </div>
      <div>
        <div className="waveform">
          <img src={svg} alt="" />
        </div>
        <p id="display">{displayText}</p>
      </div>
    </div>
  );
}

export default App;