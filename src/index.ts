const aaa = (a: number, b: number): number => {
    console.error("this is test") // 输出错误
    console.log(a + b)
    return a + b
}

aaa(1, 2)