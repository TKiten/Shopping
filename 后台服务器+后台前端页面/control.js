        var express = require('express');
        var app = express();
        var fs = require("fs");
        var formidable = require('formidable');
        var bodyParser = require('body-parser');
        var multer  = require('multer');

        //1,接受表单的请求
        app.use(bodyParser.json({limit:'50mb'}));
        app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
        app.use(bodyParser.urlencoded({ extended: false }));
        //2,设置下载的地址
        app.use(multer({ dest: '/public/'}).array('image'));

        //设置静态文件
        app.use(express.static('public'));
        //指定模板引擎
        app.set("views engine", 'ejs');
        //指定模板位置
        app.set('views', __dirname + '/views');


        //服装类目添加页面查询
        app.get('/Clothing_Sort_Add', function (req, res) {
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
                res.render('Clothing_Sort_Add', {imageData:imageData})
            })
        })

        //服装类目添加页面查询
        app.get('/Clothing_Sort_gallery', function (req, res) {
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
                res.render('Clothing_Sort_gallery', {imageData:imageData})
            })
        })


        //服装页面查询
        app.get('/Clothing_Add', function (req, res) {
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
                    let key = imageData[i].Clothing_Img;
                    //到腾讯云平台获得图片地址
                    qqUtil.query(key,function (url) {
                        imageData[i].Clothing_Img=url;
                    })
                }
                res.render('Clothing_Add', {imageData:imageData})
            })
        })

        //服装页面查询
        app.get('/Clothing_table', function (req, res) {
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
            sqlUtil.queryClothing(function (imageData) {
                //根据数据，获得key值
                var length = imageData.length;
                for (let i = 0; i < length; i++) {
                    let key = imageData[i].Clothing_Img;
                    //到腾讯云平台获得图片地址
                    qqUtil.query(key,function (url) {
                        imageData[i].Clothing_Img=url;
                    })
                }
                res.render('Clothing_table', {imageData:imageData})
            })
        })
        //更新服装类目
        app.post('/updataClothingSort', function (req, res) {
            var ClothingSortName=req.body.ClothingSortName;
            var ClothingSortIntroduce=req.body.ClothingSortIntroduce;
            //1,原始图片的地址
            var filepath = req.files[0].path;

            var fileKey = "HLZJ_ClothingSort"+new Date().getTime()+'img';

            //1, 引入腾讯模块
            var QQUtil = require('./util/QQutil');
            //2,创建对象
            qqUtil = new QQUtil();
            qqUtil.init();
            //3,上传图片到云服务器
            qqUtil.insert(fileKey, filepath,fs, function () {
                //1, 引入模块
                var SqlUtil = require('./dao/SqlUtil');
                //2,创建对象
                sqlUtil = new SqlUtil();
                sqlUtil.init();
                //3,插入语句
                sqlUtil.insertClothingSort(ClothingSortName, fileKey,ClothingSortIntroduce);
                res.redirect('./Clothing_Sort_Add');
            })
        })


        //更新服装
        app.post('/updataClothing', function (req, res) {
            //1, 引入模块
            var SqlUtil = require('./dao/SqlUtil');
            //2,创建对象
            sqlUtil = new SqlUtil();
            sqlUtil.init();
            var ClothingName=req.body.ClothingName;
            var ClothingPrice=req.body.ClothingPrice
            var ClothingIntroduce=req.body.ClothingIntroduce;
            var ClothingSortName=req.body.ClothingSortName;
            //1,原始图片的地址
            var filepath = req.files[0].path;

            var fileKey = "HLZJ_Clothing"+new Date().getTime()+'img';

            sqlUtil.queryClothingSortId(ClothingSortName,function (data) {
                var Clothing_Sort_id=data[0].id

                //1, 引入腾讯模块
                var QQUtil = require('./util/QQutil');
                //2,创建对象
                qqUtil = new QQUtil();
                qqUtil.init();
                //3,上传图片到云服务器
                qqUtil.insert(fileKey, filepath,fs, function () {
                    var SqlUtil = require('./dao/SqlUtil');
                    //2,创建对象
                    sqlUtil = new SqlUtil();
                    sqlUtil.init();
                    //3,插入语句
                    sqlUtil.insertClothing(ClothingName, fileKey,ClothingPrice,ClothingIntroduce,Clothing_Sort_id);
                    res.redirect('./Clothing_Add');
                })
            })


        })


        //删除服装类目
        app.post('/deleteClothingSort', function (req, res) {
            var id=req.body.id;
            var SqlUtil = require('./dao/SqlUtil');
            //2,创建对象
            sqlUtil = new SqlUtil();
            sqlUtil.init();
            //3,插入语句
            sqlUtil.deleteClothingSort(id,function (data) {
                var result={
                    ok:1,
                };
                res.json(result);
            });
        })
        //删除服装
        app.post('/deleteClothing', function (req, res) {
            var id=req.body.id;
            var SqlUtil = require('./dao/SqlUtil');
            //2,创建对象
            sqlUtil = new SqlUtil();
            sqlUtil.init();
            //3,插入语句
            sqlUtil.deleteClothing(id,function (data) {
                var result={
                    ok:1,
                };
                res.json(result);
            });

        })

        //服装类目添加页面查询
        app.get('/change_Clothing_Sort', function (req, res) {
            var ClothingSortName=req.body.ClothingSortName;
            var ClothingSortImg=req.body.ClothingSortImg;
            var ClothingSortIntroduce=req.body.ClothingSortIntroduce;
            var ClothingSortId=req.body.ClothingSortId;

                //1, 引入模块
                var SqlUtil = require('./dao/SqlUtil');
                //2,创建对象
                sqlUtil = new SqlUtil();
                sqlUtil.init();
                //3,插入语句
                sqlUtil.changeClothingSort(ClothingSortName, ClothingSortImg,ClothingSortIntroduce,ClothingSortId);
            var result={
                ok:1,
            };
            res.json(result);
                res.redirect('./Clothing_Sort_gallery');

        })



        app.post('/upload', function (req, res) {
            console.log("=====================")
            var form = new formidable.IncomingForm();   //创建上传表单
            form.encoding = 'utf-8';        //设置编辑
            form.uploadDir = 'public/upload';     //设置上传目录
            form.keepExtensions = true;     //保留后缀
            form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
            form.parse(req, function(err, fields, files) {

                if (err) {
                    res.locals.error = err;

                    return;
                }
                //显示地址；
                var img_file_path=files.uploadImage.path;
                var img_fileKey = "HLZJ_ClothingSort"+new Date().getTime()+'img';
                console.log(img_file_path);

                //1, 引入腾讯模块
                var QQUtil = require('./util/QQutil');
                //2,创建对象
                qqUtil = new QQUtil();
                qqUtil.init();
                //3,上传图片到云服务器
                qqUtil.insert(img_fileKey,img_file_path,fs, function () {

                })

                res.json({
                    "img_fileKey":img_fileKey
                });
            });
        })
        var server = app.listen(8088)
