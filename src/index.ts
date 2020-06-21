import canvas from './canvas'
var aaa = (a: number, b: number): number => {
    console.error("this is test") // 输出错误
    console.log(canvas)
    return a + b
}

aaa(1, 2)