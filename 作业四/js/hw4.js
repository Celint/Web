/*
 * @描述: 
 * @作者: 李天红
 * @Github: https://github.com/Celint/
 * @Date: 2019-10-17 22:12:12
 * @LastEditors: 李天红
 * @LastEditTime: 2019-10-18 21:12:00
 */
var servers = document.getElementById("servers");
class user {
    constructor(name, status) {
        this.name = name;
        this.addNode(status);
    }
    addNode(s) {
        this.status = s;
        this.username = document.createElement('div');
        if (this.status) {
            this.username.className = "greencircle";
        } else {
            this.username.className = "redcircle";
        }
        this.child = document.createElement('div');
        this.child.className = "showname";
        this.child.innerHTML = this.name;
        servers.appendChild(this.username);
        this.username.appendChild(this.child);
        var cc = this.child;
        this.username.onmousemove = function () {
            cc.style.display = "flex";
        }
        this.username.onmouseout = function () {
            cc.style.display = "none";
        }
    }
    setStatus(s) {
        this.status = s;
    }
    showName() {
        this.username.addEventListener('mousemove', function () {
            this.child.style.display = "flex";
        });
    }
}

new user("0902170401", 1).showName();
new user("0902170402", 1);
new user("0902170403", 0);
new user("0902170404", 1);
new user("0902170405", 1);
new user("0902170406", 1);
new user("0902170407", 0);
new user("0902170408", 1);
new user("0902170409", 1);
new user("0902170410", 1);
new user("0902170411", 0);
new user("0902170412", 0);
new user("0902170413", 0);
new user("0902170414", 1);
new user("0902170415", 0);
new user("0902170416", 0);
new user("0902170417", 0);
new user("0902170418", 1);
new user("0902170419", 0);
new user("0902170420", 0);
new user("0902170421", 0);
new user("0902170422", 0);
new user("0902170423", 0);
new user("0902170424", 0);
new user("0902170425", 0);
new user("0902170426", 0);
new user("0902170427", 0);
new user("0902170428", 1);
new user("0902170429", 0);
new user("0902170430", 0);
new user("0902170431", 0);

var lth = new user("李天红", 0);

new user("0902170432", 0);
new user("0902170433", 0);
new user("0902170434", 0);
new user("0902170435", 1);
new user("0902170436", 1);
new user("0902170437", 1);
new user("0902170438", 0);
new user("0902170439", 0);
new user("0902170440", 0);
new user("0902170441", 0);
new user("0902170442", 0);
new user("0902170443", 1);
new user("0902170444", 1);
new user("0902170445", 1);
new user("0902170446", 1);
new user("0902170447", 1);
new user("0902170448", 0);
new user("0902170449", 0);
new user("0902170450", 0);
new user("0902170451", 1);
new user("0902170452", 1);
new user("0902170453", 1);
new user("0902170454", 1);
new user("0902170455", 1);
new user("0902170456", 1);
new user("0902170457", 1);
new user("0902170458", 0);
new user("0902170459", 1);
new user("0902170460", 1);
new user("0902170461", 1);
new user("0902170462", 1);

var username = document.createElement('span');
username.innerText = lth.name.toString();
var hello = document.getElementById("hello");
hello.parentElement.insertBefore(username, hello);
username.addEventListener("mousemove", function () {
    lth.child.style.display = "flex";
    username.style.cursor = "pointer";
});
username.addEventListener("mouseout", function () {
    lth.child.style.display = "none";
})