import { Canvas } from './canvas'
import { Num, Geom } from './num'
import { Isetup } from './types'

window.Draw = ( params:Isetup ): Canvas => {
    return new Canvas(params)
}

window.Num = Num

window.Geom = Geom