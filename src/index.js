"use strict";
var aaa = function (a, b) {
    console.error("this is test"); // 输出错误
    console.log(a + b);
    return a + b;
};
aaa(1, 2);
