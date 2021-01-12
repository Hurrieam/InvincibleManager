//查询逻辑的实现
function findout() {
    name = document.getElementById("name").value;
    money = users_data[name];
    if (money != undefined) {
        alert(name + "的存款总额为" + users_data[name]);
    } else {
        alert("未输入名字或查不到对应的数据！" + name);
    }
}
//查询逻辑结束