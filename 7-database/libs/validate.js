module.exports = {
    username(username){
        if(!username){
            return "用户名不能为空"
        }else if(username.length>32){
            return "用户名不能超过32位";
        }else if(!/^\w{4,32}$/.test(username)){
            return "格式不对"
        }else{
            return "";
        }
    },
    password(pass){
        if(!pass){
            return "密码不能为空"
        }else if(pass.length>32){
            return "密码不能超过32位";
        }else if(!/^\w{4,32}$/.test(pass)){
            return "格式不对"
        }else{
            return "";
        }
    }
}