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
    }
/*    //=======================================================================================
    this.updataMens=function (productName1,productPrice1,Id1) {
        //4,编写sql语句
        var userModSql = 'UPDATE product_mens SET productName = ? ,productPrice = ? WHERE Id = ?';

        var userModSql_Params = [ productName1, productPrice1, Id1];
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
    this.updataWomens=function (productName1,productPrice1,Id1) {
        //4,编写sql语句
        var userModSql = 'UPDATE product_womens SET productName = ? ,productPrice = ? WHERE Id = ?';

        var userModSql_Params = [ productName1, productPrice1, Id1];
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
    this.updataSingle=function (productName1,productPrice1,Id1) {
        //4,编写sql语句
        var userModSql = 'UPDATE product_single SET productName = ? ,productPrice = ? WHERE Id = ?';

        var userModSql_Params = [ productName1, productPrice1, Id1];
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
    this.updataCheckout=function (productName1,productPrice1,Id1) {
        //4,编写sql语句
        var userModSql = 'UPDATE product_checkout SET productName = ? ,productPrice = ? WHERE Id = ?';

        var userModSql_Params = [ productName1, productPrice1, Id1];
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
    //==========================================================================================================*/
}


module.exports = SqlUtil;