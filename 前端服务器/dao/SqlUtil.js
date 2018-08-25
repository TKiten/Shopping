function SqlUtil() {
    var connection;
    this.init = function () {
        var mysql = require('mysql');  //调用MySQL模块

        //1，创建一个connection
        connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: '123',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'wx'          //数据库里面的数据
        });

        //2,连接
        connection.connect();
    }
    //insertMusiclist
    this.insertClothingSort = function (ClothingSort_name, ClothingSort_fileKey,ClothingSort_introduce) {
        //1,编写sql语句
        var userAddSql = 'INSERT INTO Clothing_Sort(Clothing_Sort_Name,Clothing_Sort_Img,Clothing_Sort_Introduce) VALUES(?,?,?)';
        var userAddSql_Params = [ClothingSort_name, ClothingSort_fileKey,ClothingSort_introduce];
        //2,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，userAddSql_Params，sql语句中的值
         * 3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
        });
        //5,连接结束
        connection.end();
    }
    //insertMusic
    this.insertClothing = function (Clothing_Name,Clothing_Img,Clothing_Price,Clothing_Introduce,Clothing_Sort) {
        //1,编写sql语句
        var userAddSql = 'INSERT INTO Clothings(Clothing_Name,Clothing_Img,Clothing_Price,Clothing_Introduce,Clothing_Sort) VALUES(?,?,?,?,?)';
        var userAddSql_Params = [Clothing_Name,Clothing_Img,Clothing_Price,Clothing_Introduce,Clothing_Sort];
        //2,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，userAddSql_Params，sql语句中的值
         * 3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
        });
        //5,连接结束
        connection.end();
    }
    this.insertCarts = function (Product_Name,Product_Price,Product_Img) {
        //1,编写sql语句
        var userAddSql = 'INSERT INTO Carts(Product_Name,Product_Price,Product_Img) VALUES(?,?,?)';
        var userAddSql_Params = [Product_Name,Product_Price,Product_Img];
        //2,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，userAddSql_Params，sql语句中的值
         * 3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
        });
        //5,连接结束
        connection.end();
    }
    //服装类目查询
    this.queryClothingSort = function (call) {

        var sql = "select * from Clothing_Sort";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
       //5,连接结束
        connection.end();
    }
    //服装查询
    this.queryClothing = function (call) {

        var sql = "select * from Clothings";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
        //5,连接结束
        connection.end();
    }
    //购物车查询
    this.queryCarts = function (call) {

        var sql = "select * from Carts";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
        //5,连接结束
        connection.end();
    }
    //秋季新品服装查询
    this.queryKinds = function (call) {

        var sql = "select * from Clothings where Clothing_Sort=(select id from Clothing_Sort where Clothing_Sort_Name='秋季新品')";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
        //5,连接结束

    }
    //系列产品服装查询
    this.queryKinds1 = function (call) {

        var sql = "select * from Clothings where Clothing_Sort=(select id from Clothing_Sort where Clothing_Sort_Name='系列产品')";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });

    }
    //鞋类查询
    this.queryKinds2 = function (call) {
        var sql = "select * from Clothings where Clothing_Sort=(select id from Clothing_Sort where Clothing_Sort_Name='鞋类')";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });

    }
    //裤装查询
    this.queryKinds3 = function (call) {
        var sql = "select * from Clothings where Clothing_Sort=(select id from Clothing_Sort where Clothing_Sort_Name='裤装')";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });

    }
    //配饰查询
    this.queryKinds4 = function (call) {
        var sql = "select * from Clothings where Clothing_Sort=(select id from Clothing_Sort where Clothing_Sort_Name='配饰')";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }

            call(result);
        });

    }
    //配饰查询
    this.queryDetails = function (call) {
        var sql = "select * from Clothings where Clothing_Sort=(select id from Clothing_Sort where Clothing_Sort_Name='clothings')";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });

    }
    this.connection_end=function () {
        connection.end();
    }
    //;
    //查询服装类目ID
    this.queryClothingSortId = function (name,call) {

        var sql = "select * from Clothing_Sort where Clothing_Sort_Name=?";
        var userAddSql_Params = [name];
        connection.query(sql,userAddSql_Params, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            console.log(result)
            call(result);
        });
        //5,连接结束
        connection.end();
    }

    //
    this.deleteClothingSort=function (id,call) {
        var  userGetSql = 'DELETE FROM Clothing_Sort where id = '+id;

        connection.query(userGetSql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            call(result);
        });
        //5,连接结束
        connection.end();
    }
    this.deleteClothing=function (id,call) {
        var  userGetSql = 'DELETE FROM Clothings where id = '+id;

        connection.query(userGetSql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            call(result);
        });
        //5,连接结束
        connection.end();
    }

    this.changeClothingSort=function (ClothingSort_name, ClothingSort_fileKey,ClothingSort_introduce,id) {
        //4,编写sql语句
        var userModSql = 'UPDATE Clothing_Sort SET Clothing_Sort_Name = ?,Clothing_Sort_Img = ?,Clothing_Sort_Introduce= ? WHERE id = ?';

        var userModSql_Params = [ClothingSort_name, ClothingSort_fileKey,ClothingSort_introduce,id];
        console.log(userModSql_Params);
        //5，更新操作
        connection.query(userModSql,userModSql_Params,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
        });
        //5,连接结束
        connection.end();
    }
    this.changeClothing=function (Clothing_Name,Clothing_Img,Clothing_Price,Clothing_Introduce,id) {
        //4,编写sql语句
        var userModSql = 'UPDATE Clothings SET Clothing_Name = ?,Clothing_Img = ?,Clothing_Price = ?,Clothing_Introduce= ? WHERE id = ?';

        var userModSql_Params = [Clothing_Name, Clothing_Img,Clothing_Price,Clothing_Introduce,id];
        console.log(userModSql_Params);
        //5，更新操作
        connection.query(userModSql,userModSql_Params,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
        });
        //5,连接结束
        connection.end();
    }
}


module.exports = SqlUtil;