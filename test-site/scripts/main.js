/*
 * @Author: Idoahc
 * @Date: 2023-06-07 17:27:42
 * @LastEditors: Idoahc
 * @LastEditTime: 2023-06-08 15:29:08
 * @FilePath: /test-site/scripts/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/2.webp') {
        myImage.setAttribute('src', 'images/dog.webp')
    } else {
        myImage.setAttribute('src', 'images/2.webp')
    }
}

let myButton1 = document.querySelector('button');
let myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton1.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('请输入您的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}