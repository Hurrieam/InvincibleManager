//自适应
function selfComfortability() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    document.getElementById("context").style.top = height / 2 - 125 + "px";
    document.getElementById("context").style.left = width / 2 - 150 + "px";
}
var func = setInterval(selfComfortability, 1);
//clearInterval(func); //对此语句取消注释来取消自适应
//自适应段结束

//登录逻辑的实现
function submit() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    if (account == "" || password == "") {
        alert("您还未输入账户或密码哦~");
    } else {
        if (account == submit_data["account"] && password == submit_data["password"]) {
            alert("登陆成功");
            window.location.href = "src\\content.html";
        } else {
            alert("用户名或密码错误");
        }
    }
}
//登录逻辑结束