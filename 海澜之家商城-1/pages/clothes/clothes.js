//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    imgUrls: [ ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false,
    productMessage:null
  },
  tabSwitch: function () {
      
    wx.switchTab({
      url: '../index/index'
    })
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num: num
    })
  },
  
  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true,
      productMessage: JSON.stringify(self.data.imgUrls[1])
    })
    setTimeout(function () {
      self.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(function () {
        self.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)
    
    var API_URL = 'http://localhost:8070/cartsinfor';

    wx.request({
      url: API_URL,
      method: "POST",
      data: {
        product: self.data.productMessage,
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
       console.log('传成功')
      }
    })
  },
  onLoad: function (options) {
    var that = this;
    var API_URL = 'http://localhost:8070/detailsinfor';

    wx.request({
      url: API_URL,
      method: "POST",
      data: {
        id: 10,
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        that.setData({
          imgUrls: res.data.data1,
      
        });
      }
    })

  }
})
