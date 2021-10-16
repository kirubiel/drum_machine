import q from './sounds/sound (20).wav'
import w from './sounds/04 - Snap [LCJ].wav'
import e from './sounds/Chant_15.wav'
import a from './sounds/20inchbell.wav'
import s from './sounds/Hat_Open_07.wav'
import d from './sounds/Hat_Closed_06.wav'
import z from './sounds/Kick (1).wav'
import x from './sounds/Snare (34).wav'
import c from './sounds/02 - RimShot [LCJ].wav'

import qSVG from './svgs/Chord Hit.svg'
import wSVG from './svgs/Snap.svg'
import eSVG from './svgs/Chant.svg'
import aSVG from './svgs/Ride.svg'
import sSVG from './svgs/Open Hat.svg'
import dSVG from './svgs/Closed Hat.svg'
import zSVG from './svgs/Kick.svg'
import xSVG from './svgs/Snare.svg'
import cSVG from './svgs/Rimshot.svg'

class Pad {
    constructor(name, src, text, svg) {
        this.name = name
        this.src = src
        this.text = text
        this.svg = svg
    }
}

const qPad = new Pad('q', q, 'Chord Hit', qSVG)
const wPad = new Pad('w', w, 'Snap', wSVG)
const ePad = new Pad('e', e, 'Chant', eSVG)
const aPad = new Pad('a', a, 'Ride', aSVG)
const sPad = new Pad('s', s, 'Open Hat', sSVG)
const dPad = new Pad('d', d, 'Closed Hat', dSVG)
const zPad = new Pad('z', z, 'Kick', zSVG)
const xPad = new Pad('x', x, 'Snare', xSVG)
const cPad = new Pad('c', c, 'Rimshot', cSVG)

export const DataBank = [qPad, wPad, ePad, aPad, sPad, dPad, zPad, xPad, cPad]