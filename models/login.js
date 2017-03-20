var database=require("./db")

Login={

    //for login
    login:function(username,cb){
        console.log('select * from users where username= "' + username + '"')
        database.query('select * from users where username= "' + username + '"',function(err,rows){
            if(rows){
                cb(rows)
            }
            else{
                cb("Error")
            }
        })
    },

    //for register
    register:function(data,cb){
        database.query('INSERT INTO users (username,password,firstname,lastname) VALUES ("' + data.username + '","' + data.password + '","' + data.firstname + '","' + data.lastname + '")',function(err,rows){
                    if(rows){
                        cb(rows)
                    }
                    else{
                        cb("Error")
                    }
         })
    }
}

module.exports=Login