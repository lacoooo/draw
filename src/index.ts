import { Canvas } from './canvas'
import { Num } from './num'
import { Isetup } from './types'

window.Draw = ( params:Isetup ) => {
    return new Canvas(params)
}

window.Num = Num