        var express = require('express');
        var app = express();
        //设置跨域访问
        app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By",' 3.2.1')
            res.header("Content-Type", "application/json;charset=utf-8");
            next();
        });
        app.use(express.static('public'));
        //指定模板引擎
        app.set("views engine", 'ejs');
        //指定模板位置
        app.set('views', __dirname + '/views');

        var bodyParser = require('body-parser');
        // 创建 application/x-www-form-urlencoded 编码解析
        var urlencodedParser = bodyParser.urlencoded({ extended: false })

        app.use(express.static('public'));
        app.post('/indexinfor', urlencodedParser, function (req, res) {
            //1, 引入模块
            var SqlUtil = require('./dao/SqlUtil');
            //2,创建对象
            sqlUtil = new SqlUtil();
            sqlUtil.init();
            //1, 引入腾讯模块
            var QQUtil = require('./util/QQutil');
            //2,创建对象
            qqUtil = new QQUtil();
            qqUtil.init();
            //3,查询语句
            sqlUtil.queryClothingSort(function (imageData) {
                //根据数据，获得key值
                var length = imageData.length;
                for (let i = 0; i < length; i++) {
                    let key = imageData[i].Clothing_Sort_Img;
                    //到腾讯云平台获得图片地址
                    qqUtil.query(key,function (url) {
                        imageData[i].Clothing_Sort_Img=url;
                    })
                }
                sqlUtil1 = new SqlUtil();
                sqlUtil1.init();
                sqlUtil1.queryClothing(function (imageData1) {
                    //根据数据，获得key值
                    var length = imageData1.length;
                    for (let i = 0; i < length; i++) {
                        let key = imageData1[i].Clothing_Img;
                        //到腾讯云平台获得图片地址
                        qqUtil.query(key,function (url) {
                            imageData1[i].Clothing_Img=url;
                        })
                    }
                    function IndexData(data1,data2) {
                        this.data1=data1;
                        this.data2=data2;

                    }

                    var buffer= new IndexData(imageData,imageData1);
                    res.write(JSON.stringify(buffer));
                    res.end();
                })

            })
        })


        app.post('/kindsinfor', urlencodedParser, function (req, res) {
            //1, 引入模块
            var SqlUtil = require('./dao/SqlUtil');
            //2,创建对象
            sqlUtil = new SqlUtil();
            sqlUtil.init();
            //1, 引入腾讯模块
            var QQUtil = require('./util/QQutil');
            //2,创建对象
            qqUtil = new QQUtil();
            qqUtil.init();
            //3,查询语句
            sqlUtil.queryKinds(function (imageData) {
                //根据数据，获得key值
                var length = imageData.length;
                for (let i = 0; i < length; i++) {
                    let key = imageData[i].Clothing_Img;
                    //到腾讯云平台获得图片地址
                    qqUtil.query(key,function (url) {
                        imageData[i].Clothing_Img=url;
                    })
                }
                sqlUtil.queryKinds1(function (imageData1) {
                    //根据数据，获得key值
                    var length = imageData1.length;
                    for (let i = 0; i < length; i++) {
                        let key = imageData1[i].Clothing_Img;
                        //到腾讯云平台获得图片地址
                        qqUtil.query(key,function (url) {
                            imageData1[i].Clothing_Img=url;
                        })
                    }
                    sqlUtil.queryKinds2(function (imageData2) {
                        //根据数据，获得key值
                        var length = imageData2.length;
                        for (let i = 0; i < length; i++) {
                            let key = imageData2[i].Clothing_Img;
                            //到腾讯云平台获得图片地址
                            qqUtil.query(key,function (url) {
                                imageData2[i].Clothing_Img=url;
                            })
                        }
                        sqlUtil.queryKinds3(function (imageData3) {
                            //根据数据，获得key值
                            var length = imageData3.length;
                            for (let i = 0; i < length; i++) {
                                let key = imageData3[i].Clothing_Img;
                                //到腾讯云平台获得图片地址
                                qqUtil.query(key,function (url) {
                                    imageData3[i].Clothing_Img=url;
                                })
                            }
                            sqlUtil.queryKinds4(function (imageData4) {
                                //根据数据，获得key值
                                var length = imageData4.length;
                                for (let i = 0; i < length; i++) {
                                    let key = imageData4[i].Clothing_Img;
                                    //到腾讯云平台获得图片地址
                                    qqUtil.query(key,function (url) {
                                        imageData4[i].Clothing_Img=url;
                                    })
                                }
                                sqlUtil.connection_end();
                                function IndexData(data1,data2,data3,data4,data5) {
                                    this.data1=data1;
                                    this.data2=data2;
                                    this.data3=data3;
                                    this.data4=data4;
                                    this.data5=data5;
                                }

                                var buffer= new IndexData(imageData,imageData1,imageData2,imageData3,imageData4);
                                res.write(JSON.stringify(buffer));
                                res.end();
                            })
                        })
                    })
                })

            })
        })
        app.post('/detailsinfor', urlencodedParser, function (req, res) {
            //1, 引入模块
            var SqlUtil = require('./dao/SqlUtil');
            //2,创建对象
            sqlUtil = new SqlUtil();
            sqlUtil.init();
            //1, 引入腾讯模块
            var QQUtil = require('./util/QQutil');
            //2,创建对象
            qqUtil = new QQUtil();
            qqUtil.init();
            //3,查询语句
            sqlUtil.queryDetails(function (imageData) {
                //根据数据，获得key值
                var length = imageData.length;
                for (let i = 0; i < length; i++) {
                    let key = imageData[i].Clothing_Img;
                    //到腾讯云平台获得图片地址
                    qqUtil.query(key,function (url) {
                        imageData[i].Clothing_Img=url;
                    })
                }

                function IndexData(data1) {
                    this.data1=data1;


                }

                var buffer= new IndexData(imageData);
                res.write(JSON.stringify(buffer));
                res.end();

            })
        })
        //想购物车添加信息
        app.post('/cartsinfor', urlencodedParser, function (req, res) {
                var buffer=req.body.product;
                var product=JSON.parse(buffer);
                //1, 引入模块
                var SqlUtil = require('./dao/SqlUtil');
                //2,创建对象
                sqlUtil = new SqlUtil();
                sqlUtil.init();
                //3,插入语句
                sqlUtil.insertCarts(product.Clothing_Introduce, product.Clothing_Price,product.Clothing_Img);

        })
        //从购物车取信息
        app.post('/querycartsinfor', urlencodedParser, function (req, res) {

            //1, 引入模块
            var SqlUtil = require('./dao/SqlUtil');
            //2,创建对象
            sqlUtil = new SqlUtil();
            sqlUtil.init();
            //3,插入语句
            sqlUtil.queryCarts(function (imageData) {
                function IndexData(data1) {
                    this.data1=data1;
                }
                console.log(imageData)
                var buffer= new IndexData(imageData);
                res.write(JSON.stringify(buffer));
                res.end();
            })
        })
        //从购物车取信息
        app.post('/querycartsinfor1', urlencodedParser, function (req, res) {

            //1, 引入模块
            var SqlUtil = require('./dao/SqlUtil');
            //2,创建对象
            sqlUtil = new SqlUtil();
            sqlUtil.init();
            //3,插入语句
            sqlUtil.queryCarts(function (imageData) {
                function IndexData(data1) {
                    this.data1=data1;
                }
                console.log(imageData)
                var buffer= new IndexData(imageData);
                res.write(JSON.stringify(buffer));
                res.end();
            })
        })
        app.post('/infor', urlencodedParser, function (req, res) {
            var infor =req.body.infor;
            res.write("infor:"+infor);
            res.end();
        })

        var server = app.listen(8070)