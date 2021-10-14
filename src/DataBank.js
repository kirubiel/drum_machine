import q from './sounds/sound (20).wav'
import w from './sounds/04 - Snap [LCJ].wav'
import e from './sounds/Chant_15.wav'
import a from './sounds/20inchbell.wav'
import s from './sounds/Hat_Open_07.wav'
import d from './sounds/Hat_Closed_06.wav'
import z from './sounds/Kick (1).wav'
import x from './sounds/Snare (34).wav'
import c from './sounds/02 - RimShot [LCJ].wav'

class Pad {
    constructor(name, src, text) {
        this.name = name
        this.src = src
        this.text = text
    }
}

const qPad = new Pad('q', q, 'Chord Hit')
const wPad = new Pad('w', w, 'Snap')
const ePad = new Pad('e', e, 'Chant')
const aPad = new Pad('a', a, 'Ride')
const sPad = new Pad('s', s, 'Open Hat')
const dPad = new Pad('d', d, 'Closed Hat')
const zPad = new Pad('z', z, 'Kick')
const xPad = new Pad('x', x, 'Snare')
const cPad = new Pad('c', c, 'Rimshot')

export const DataBank = [qPad, wPad, ePad, aPad, sPad, dPad, zPad, xPad, cPad]