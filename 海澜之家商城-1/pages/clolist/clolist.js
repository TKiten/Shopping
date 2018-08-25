const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls:[]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../clothes/clothes?title=微信小程序'
    })
  },
  sendData: function (e) {
    var data = e.currentTarget.dataset;
    console.log(data);
  },
  onLoad:function(){
    var that = this;
    var API_URL = 'http://localhost:8070/indexinfor';

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
          imgUrls: res.data.data2
        });
      }
    })
  }

})

