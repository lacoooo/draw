import { Canvas } from './Canvas'
import { Isetup } from './Types'

window.Draw = ( params:Isetup ) => {
    return new Canvas(params)
}