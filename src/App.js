import { useRef, useEffect, useState } from 'react'
import './App.css';

import {DataBank} from './DataBank';

function App() {
  const [displayText, setDisplayText] = useState(null)

  const playAudio = (e, text) => {
    let audio = e.target.firstChild
    setDisplayText(text)
    audio.load()
    audio.play()
  }

  const elementRef = useRef()
  const padsRef = useRef([])

  useEffect(() => {
    elementRef.current.focus()
    padsRef.current = padsRef.current.slice(0, DataBank.length)
  })

  const playAudioKey = (e) => {
    const indexOfPad = padsRef.current.findIndex(pad => pad.id.toLowerCase() === e.key.toLowerCase())
    if(indexOfPad > -1) {
      let audio = padsRef.current[indexOfPad]
      setDisplayText(DataBank[indexOfPad].text)
      // console.log(displayText)
      // console.log(indexOfPad)
      // console.log(DataBank[indexOfPad].text)
      audio.load()
      audio.play()
    }
  }

  return (
    <div id="drum-machine">
      <div className="drum-pads" tabIndex="0"
        autoFocus={true} ref={elementRef}
        onBlur={({ target }) => target.focus()}
        onKeyDown={e => playAudioKey(e)}>
        {DataBank.map((pad, i) => <button key={i} id={i} className="drum-pad" onClick={e => playAudio(e, pad.text)}>
          <audio id={pad.name.toUpperCase()} ref={el => padsRef.current[i] = el} className="clip" src={pad.src} preload="none" />
          {pad.name.toUpperCase()}
        </button>)}
      </div>
      <p id="display">{displayText}</p>
    </div>
  );
}

export default App;
