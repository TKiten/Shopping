// pages/kinds/kinds.js.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls_01: [],
    imgUrls_02: [],
    imgUrls_03: [],
    imgUrls_04: [],
    imgUrls_05: []
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../clolist/clolist?title=微信小程序'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var API_URL = 'http://localhost:8070/kindsinfor';

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
          imgUrls_01: res.data.data1,
          imgUrls_02: res.data.data2,
          imgUrls_03: res.data.data3,
          imgUrls_04: res.data.data4,
          imgUrls_05: res.data.data5
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})