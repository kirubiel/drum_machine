import q from './sounds/sound (20).wav'
import w from './sounds/04 - Snap [LCJ].wav'
import e from './sounds/Chant_15.wav'
import a from './sounds/20inchbell.wav'
import s from './sounds/Hat_Open_07.wav'
import d from './sounds/Hat_Closed_06.wav'
import z from './sounds/Kick (1).wav'
import x from './sounds/Snare (34).wav'
import c from './sounds/02 - RimShot [LCJ].wav'


const qPad = {
    name: 'q',
    src: q,
    text: "Chord Hit"
}

const wPad = {
    name: 'w',
    src: w,
    text: "Snap"
}

const ePad = {
    name: "e",
    src: e,
    text: "Chant"
}

const aPad = {
    name: "a",
    src: a,
    text: "Ride"
}

const sPad = {
    name: "s",
    src: s,
    text: "Open Hat"
}

const dPad = {
    name: "d",
    src: d,
    text: "Closed Hat"
}

const zPad = {
    name: "z",
    src: z,
    text: "Kick"
}

const xPad = {
    name: "x",
    src: x,
    text: "Snare"
}

const cPad = {
    name: "c",
    src: c,
    text: "Sidestick"
}

export const DataBank = [qPad, wPad, ePad, aPad, sPad, dPad, zPad, xPad, cPad]
