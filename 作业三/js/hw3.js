/*
 * @描述: 
 * @作者: 李天红
 * @Github: https://github.com/Celint/
 * @Date: 2019-10-17 14:34:38
 * @LastEditors: 李天红
 * @LastEditTime: 2019-10-17 18:01:08
 */
var changePhoto = document.getElementById("change_photo");      //获取img的id
var jbqkCard = document.getElementById("jbqkCard");
var redution = document.createElement("button");                //添加一个还原节点
redution.innerText = "还原";
var buttons = document.getElementById("buttons");               //按钮所在的span
var shrinkButton = document.getElementById("shrinkButton");     //缩小按钮

var times = document.getElementById("times");                   //文本框设置时间

var scaleImage = changePhoto.width / changePhoto.height;        //图片长宽比
var scale = 1.2;    //放大或缩小比例

function moveHeadPhoto() {
    changePhoto.src = "images/Redsky.jpg";
}

function moveBodyPhoto() {
    changePhoto.src = "images/lth_body.jpg";
}

// 放大
function enlarge() {
    if (changePhoto.width < 5)
        changePhoto.width = 5;
    else if (changePhoto.width > 290 && changePhoto.width < 600) {
        jbqkCard.style.width = changePhoto.width * 1.3 + "px";
        if (changePhoto.width > 320)
            buttons.insertBefore(redution, shrinkButton);
    }
    changePhoto.width *= scale;
    changePhoto.height = changePhoto.width / scaleImage;
}

// 缩小
function shrink() {
    changePhoto.width /= scale;
    if (changePhoto.width > 290) {
        jbqkCard.style.width = changePhoto.width * 1.3 + "px";
    }
    else {
        jbqkCard.style.width = "300px";
        if (changePhoto.width < 50)
            buttons.insertBefore(redution, shrinkButton);
    }
    changePhoto.height = changePhoto.width / scaleImage;
}

redution.addEventListener("click", function () {                //还原函数
    changePhoto.width = 120 * 1.2;
    changePhoto.height = changePhoto.width / scaleImage;
    shrink();
    buttons.removeChild(redution);
});

function displaytimes() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;
    times.value = hours + ":" + minutes + ":" + seconds;
}

window.setInterval("displaytimes()", 1000);