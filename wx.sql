/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50151
Source Host           : localhost:3306
Source Database       : wx

Target Server Type    : MYSQL
Target Server Version : 50151
File Encoding         : 65001

Date: 2018-08-25 16:55:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `carts`
-- ----------------------------
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Product_Name` varchar(1000) DEFAULT NULL,
  `Product_Price` varchar(1000) DEFAULT NULL,
  `Product_Img` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carts
-- ----------------------------
INSERT INTO `carts` VALUES ('15', 'HLA/海澜之家时尚渐变短袖T恤2018夏季新品舒适短袖polo衫男', '158', 'https://drifter-1256448433.cos.ap-chengdu.myqcloud.com/HLZJ_Clothing1535010776761img?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID7IWq5vTCpME1e6vUTOFza2JPdviOiXs5%26q-sign-time%3D1535091580%3B1535691580%26q-key-time%3D1535091580%3B1535691580%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3Dde52d4c7e85c92826beea62534c2bf28e7b93028?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID7IWq5vTCpME1e6vUTOFza2JPdviOiXs5%26q-sign-time%3D1535091580%3B1535691580%26q-key-time%3D1535091580%3B1535691580%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3Dde52d4c7e85c92826beea62534c2bf28e7b93028');
INSERT INTO `carts` VALUES ('16', 'HLA/海澜之家时尚渐变短袖T恤2018夏季新品舒适短袖polo衫男', '158', 'https://drifter-1256448433.cos.ap-chengdu.myqcloud.com/HLZJ_Clothing1535010776761img?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID7IWq5vTCpME1e6vUTOFza2JPdviOiXs5%26q-sign-time%3D1535091668%3B1535691668%26q-key-time%3D1535091668%3B1535691668%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3Db889100dca1bf7a4f67d73bd5ec411cb1e785eef?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKID7IWq5vTCpME1e6vUTOFza2JPdviOiXs5%26q-sign-time%3D1535091668%3B1535691668%26q-key-time%3D1535091668%3B1535691668%26q-header-list%3D%26q-url-param-list%3D%26q-signature%3Db889100dca1bf7a4f67d73bd5ec411cb1e785eef');

-- ----------------------------
-- Table structure for `clothings`
-- ----------------------------
DROP TABLE IF EXISTS `clothings`;
CREATE TABLE `clothings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Clothing_Name` varchar(1000) DEFAULT NULL,
  `Clothing_Img` varchar(1000) DEFAULT NULL,
  `Clothing_Price` varchar(1000) DEFAULT NULL,
  `Clothing_Introduce` varchar(1000) DEFAULT NULL,
  `Clothing_Sort` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clothings
-- ----------------------------
INSERT INTO `clothings` VALUES ('2', '外套', 'HLZJ_Clothing1534920249889img', '158', 'HLA/海澜之家条纹上衣POLO衬衫', '3');
INSERT INTO `clothings` VALUES ('3', '外套', 'HLZJ_Clothing1534920277302img', '158', 'HLA/海澜之家白色上衣短袖T恤', '2');
INSERT INTO `clothings` VALUES ('4', '外套', 'HLZJ_Clothing1534920295692img', '158', 'HLA/海澜之家条纹上衣短袖T恤', '2');
INSERT INTO `clothings` VALUES ('5', '外套', 'HLZJ_Clothing1534920316446img', '158', 'HLA/海澜之家白色上衣短袖T恤', '2');
INSERT INTO `clothings` VALUES ('6', '外套', 'HLZJ_Clothing1534992567526img', '158', '套西', '11');
INSERT INTO `clothings` VALUES ('7', '外套', 'HLZJ_Clothing1534992589216img', '158', '单西', '11');
INSERT INTO `clothings` VALUES ('8', '外套', 'HLZJ_Clothing1534992608642img', '158', '风衣', '11');
INSERT INTO `clothings` VALUES ('9', '外套', 'HLZJ_Clothing1534992629623img', '158', '真皮夹克', '11');
INSERT INTO `clothings` VALUES ('10', '外套', 'HLZJ_Clothing1534992671825img', '158', '夹克', '11');
INSERT INTO `clothings` VALUES ('11', '外套', 'HLZJ_Clothing1534992694500img', '158', '牛仔外套', '11');
INSERT INTO `clothings` VALUES ('12', '外套', 'HLZJ_Clothing1534992717240img', '158', '卫衣', '11');
INSERT INTO `clothings` VALUES ('13', '外套', 'HLZJ_Clothing1534992738345img', '158', '针织毛衫', '11');
INSERT INTO `clothings` VALUES ('14', '外套', 'HLZJ_Clothing1534992762444img', '158', '长袖T恤', '11');
INSERT INTO `clothings` VALUES ('15', '外套', 'HLZJ_Clothing1534992812611img', '158', '高品质系列', '12');
INSERT INTO `clothings` VALUES ('16', '外套', 'HLZJ_Clothing1534992831596img', '158', '抗菌系列', '12');
INSERT INTO `clothings` VALUES ('17', '外套', 'HLZJ_Clothing1534992863235img', '158', '速干系列', '12');
INSERT INTO `clothings` VALUES ('18', '外套', 'HLZJ_Clothing1534992891501img', '158', '胖西游系列', '12');
INSERT INTO `clothings` VALUES ('19', '外套', 'HLZJ_Clothing1534992914548img', '158', '棉麻系列', '12');
INSERT INTO `clothings` VALUES ('20', '外套', 'HLZJ_Clothing1534992941358img', '158', '运动风系列', '12');
INSERT INTO `clothings` VALUES ('21', '鞋类', 'HLZJ_Clothing1534992969083img', '158', '休闲鞋', '13');
INSERT INTO `clothings` VALUES ('22', '鞋类', 'HLZJ_Clothing1534992989714img', '158', '正装皮鞋', '13');
INSERT INTO `clothings` VALUES ('23', '鞋类', 'HLZJ_Clothing1534993005634img', '158', '凉鞋', '13');
INSERT INTO `clothings` VALUES ('24', '裤装', 'HLZJ_Clothing1535004886208img', '145', '休闲裤', '14');
INSERT INTO `clothings` VALUES ('25', '裤装', 'HLZJ_Clothing1535004910848img', '167', '牛仔裤', '14');
INSERT INTO `clothings` VALUES ('26', '裤装', 'HLZJ_Clothing1535004949702img', '189', '西裤', '14');
INSERT INTO `clothings` VALUES ('27', '裤装', 'HLZJ_Clothing1535004977083img', '234', '九分裤', '14');
INSERT INTO `clothings` VALUES ('28', '裤装', 'HLZJ_Clothing1535005003812img', '123', '休闲中裤', '14');
INSERT INTO `clothings` VALUES ('29', '裤装', 'HLZJ_Clothing1535005027776img', '145', '牛仔中裤', '14');
INSERT INTO `clothings` VALUES ('30', '配饰', 'HLZJ_Clothing1535005360334img', '324', '领带', '15');
INSERT INTO `clothings` VALUES ('31', '配饰', 'HLZJ_Clothing1535005385566img', '213', '领结', '15');
INSERT INTO `clothings` VALUES ('32', '配饰', 'HLZJ_Clothing1535005402604img', '432', '皮带', '15');
INSERT INTO `clothings` VALUES ('33', '配饰', 'HLZJ_Clothing1535005419747img', '158', '袜子', '15');
INSERT INTO `clothings` VALUES ('34', '配饰', 'HLZJ_Clothing1535005440266img', '176', '短裤', '15');
INSERT INTO `clothings` VALUES ('35', '配饰', 'HLZJ_Clothing1535005464068img', '148', '太阳镜', '15');
INSERT INTO `clothings` VALUES ('36', '外套', 'HLZJ_Clothing1535010689991img', '158', 'HLA/海澜之家时尚渐变短袖T恤2018夏季新品舒适短袖polo衫男', '16');
INSERT INTO `clothings` VALUES ('37', '外套', 'HLZJ_Clothing1535010776761img', '158', 'HLA/海澜之家时尚渐变短袖T恤2018夏季新品舒适短袖polo衫男', '16');
INSERT INTO `clothings` VALUES ('38', '外套', 'HLZJ_Clothing1535010805543img', '158', 'HLA/海澜之家时尚渐变短袖T恤2018夏季新品舒适短袖polo衫男', '16');
INSERT INTO `clothings` VALUES ('39', '外套', 'HLZJ_Clothing1535010818860img', '158', 'HLA/海澜之家时尚渐变短袖T恤2018夏季新品舒适短袖polo衫男', '16');
INSERT INTO `clothings` VALUES ('40', '外套', 'HLZJ_Clothing1535010836249img', '158', 'HLA/海澜之家时尚渐变短袖T恤2018夏季新品舒适短袖polo衫男', '16');

-- ----------------------------
-- Table structure for `clothing_sort`
-- ----------------------------
DROP TABLE IF EXISTS `clothing_sort`;
CREATE TABLE `clothing_sort` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Clothing_Sort_Name` varchar(1000) DEFAULT NULL,
  `Clothing_Sort_Img` varchar(1000) DEFAULT NULL,
  `Clothing_Sort_Introduce` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clothing_sort
-- ----------------------------
INSERT INTO `clothing_sort` VALUES ('2', '短袖T恤', 'HLZJ_ClothingSort1534842344588img', '短袖T恤');
INSERT INTO `clothing_sort` VALUES ('3', 'POLO', 'HLZJ_ClothingSort1534842397543img', '夏装—POLO');
INSERT INTO `clothing_sort` VALUES ('4', '短袖衬衫', 'HLZJ_ClothingSort1534842431790img', '夏装—短袖衬衫');
INSERT INTO `clothing_sort` VALUES ('5', '短袖针织', 'HLZJ_ClothingSort1534842461447img', '夏装—短袖针织');
INSERT INTO `clothing_sort` VALUES ('6', '休闲中裤', 'HLZJ_ClothingSort1534842483300img', '夏装—休闲中裤');
INSERT INTO `clothing_sort` VALUES ('7', '牛仔中裤', 'HLZJ_ClothingSort1534842507707img', '夏装—牛仔中裤');
INSERT INTO `clothing_sort` VALUES ('8', '九分裤', 'HLZJ_ClothingSort1534842526011img', '夏装—九分裤');
INSERT INTO `clothing_sort` VALUES ('10', '长裤', 'HLZJ_ClothingSort1534988853743img', '夏装—长裤');
INSERT INTO `clothing_sort` VALUES ('11', '秋季新品', 'HLZJ_ClothingSort1534992371639img', '秋季新品');
INSERT INTO `clothing_sort` VALUES ('12', '系列产品', 'HLZJ_ClothingSort1534992444989img', '系列产品');
INSERT INTO `clothing_sort` VALUES ('13', '鞋类', 'HLZJ_ClothingSort1534992499705img', '鞋类');
INSERT INTO `clothing_sort` VALUES ('14', '裤装', 'HLZJ_ClothingSort1535004788185img', '裤装');
INSERT INTO `clothing_sort` VALUES ('15', '配饰', 'HLZJ_ClothingSort1535005332459img', '配饰');
INSERT INTO `clothing_sort` VALUES ('16', 'clothings', 'HLZJ_ClothingSort1535010553552img', '示例');
