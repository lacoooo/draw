import { Canvas } from './canvas'
import { Isetup } from './types'

window.Draw = ( params:Isetup ) => {
    return new Canvas(params)
}