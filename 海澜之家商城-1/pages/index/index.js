const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../image/change_01 (1).png',
      '../../image/change_02 (1).png',
    ],
    imgUrls_02: [
      '../../image/change_02_01.png',
      '../../image/change_02_02.png',
      '../../image/change_02_03.png',
      '../../image/change_02_04.png',
      '../../image/change_02_05.png',
    ],
    imgUrls_03: [],
    imgUrls_04: [],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../clolist/clolist?title=微信小程序'
    })
  },
  onLoad: function () {
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
          imgUrls_03: res.data.data1,
          imgUrls_04: res.data.data2
        });
      }
    })
  }
})