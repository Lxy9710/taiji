let demo = document.querySelector("#demo"); //通过css选择器找到这个元素 demo即html写的部分 懒得改了
let style = document.querySelector("#style");
let string = `
/*hi 我是小梁
接下来加一个样式*/ 
body{
    color:#4682B4;
}
/*然后我们画一个div*/
#div1
{
    border:2px solid #6A5ACD;
    width:200px;
    height:200px;
    left:50%;
    transform:translateX(-50%);
} 


/*圆的吧*/
#div1 {
border-radius:50%;
box-shadow:0 0 3px rgba(0,0,0,0.5);
border:none;
}
/*加颜色*/
#div1{
    background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 50%, rgba(241,241,241,1) 50%, rgba(255,255,255,1) 100%);
}
/*下面就是直接画八卦了 用了伪元素 
  意思是用css在div的第一个和最后一个子元素上分别加东西 
 */
#div1::before{
    
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    
    background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(241,241,241,1) 25%, rgba(2,0,36,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    
    background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(2,0,36,1) 25%, rgba(241,241,241,1) 25%, rgba(255,255,255,1) 100%);
}

`;
let n = 0;
let string2 = "";
// string = string.replace(/\n/g, "<br>"); //对string中的回车进行替换,但是会出现尖括号
// setInterval(() => {
//   n = n + 1;
//   demo.innerHTML = n;
// }, 1000); 可用时延来实现 但是递归更稳定些
let step = () => {
  setTimeout(() => {
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    demo.scrollTo(0, 99999);
    if (string[n] === "\n") {
      string2 += "<br>"; //判断是不是回车 进行br替换回车符号 格式美观
    } else if (string[n] == " ") {
      string2 += "&nbsp"; //html语法中的缩进 替换空格
    } else {
      string2 += string[n];
    }
    n += 1;

    if (n <= string.length) {
      step();
    } else {
    }
  }, 1);
};
step();
