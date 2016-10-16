//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    timeLine: app.globalData.timeline.data
  },
  onLoad: function () {
    console.log('onLoad')
    //var that = this
    //调用应用实例的方法获取全局数据
  },
  touchEntry (e) {
    wx.navigateTo({
      url: '../entry/entry?index=' + e.currentTarget.dataset.index
    })
  },
  contentLimit (text) {
    return text.substr(50)
  }
})
